import {
  useChainId,
  usePublicClient,
  useWaitForTransactionReceipt,
  useReadContract,
  useWriteContract,
  useAccount
} from 'wagmi'
import { AladdinContractAddress, usdtAddress } from '@/constants'
import { aladdinAbi } from '@/abis/aladdinAbi'
import { parseUnits, formatUnits } from 'viem'
import { useState } from 'react'

const USDT_DECIMALS = 6 // USDT通常是6位小数

// ERC20 ABI - 只包含我们需要的函数
const ERC20_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    name: 'allowance',
    type: 'function',
    stateMutability: 'view',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    name: 'approve',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }]
  }
] as const

export const useAladdin = () => {
  const { address } = useAccount()
  const { writeContract, data: hash, isPending } = useWriteContract()
  const publicClient = usePublicClient()
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>()
  const [actionType, setActionType] = useState<
    | 'deposit'
    | 'withdraw'
    | 'withdrawAll'
    | 'sendToAddress'
    | 'approveUsdt'
    | 'approveUsdtUnlimited'
  >()
  // 各种loading状态
  const [isDepositLoading, setIsDepositLoading] = useState(false)
  const [isWithdrawLoading, setIsWithdrawLoading] = useState(false)
  const [isWithdrawAllLoading, setIsWithdrawAllLoading] = useState(false)
  const [isSendToAddressLoading, setIsSendToAddressLoading] = useState(false)
  const [isApproveUsdtLoading, setIsApproveUsdtLoading] = useState(false)
  const [isApproveUsdtUnlimitedLoading, setIsApproveUsdtUnlimitedLoading] =
    useState(false)

  // 读取合约数据
  const { data: userDeposit, refetch: refetchUserDeposit } = useReadContract({
    address: AladdinContractAddress,
    abi: aladdinAbi,
    functionName: 'getUserDeposit',
    args: [address],
    query: {
      enabled: !!address
    }
  })

  const { data: totalDeposit, refetch: refetchTotalDeposit } = useReadContract({
    address: AladdinContractAddress,
    abi: aladdinAbi,
    functionName: 'getTotalDeposit'
  })

  const { data: totalAmount, refetch: refetchTotalAmount } = useReadContract({
    address: AladdinContractAddress,
    abi: aladdinAbi,
    functionName: 'totalAmount'
  })

  const { data: owner } = useReadContract({
    address: AladdinContractAddress,
    abi: aladdinAbi,
    functionName: 'owner'
  })

  // 手动获取USDT余额的函数（用于调试）
  const getUsdtBalanceManually = async () => {
    if (!address || !publicClient) return null

    try {
      const balance = await publicClient.readContract({
        address: usdtAddress,
        abi: ERC20_ABI,
        functionName: 'balanceOf',
        args: [address]
      })
      return balance
    } catch (error) {
      console.error('手动获取余额失败:', error)
      return null
    }
  }

  // 直接读取USDT余额 - 使用导入的usdtAddress
  const {
    data: usdtBalance,
    refetch: refetchUsdtBalance,
    isLoading: isBalanceLoading,
    error: balanceError
  } = useReadContract({
    address: usdtAddress,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      retry: 3,
      retryDelay: 1000
    }
  })

  // 读取USDT授权额度 - 使用导入的usdtAddress
  const {
    data: usdtAllowance,
    refetch: refetchUsdtAllowance,
    isLoading: isAllowanceLoading,
    error: allowanceError
  } = useReadContract({
    address: usdtAddress,
    abi: ERC20_ABI,
    functionName: 'allowance',
    args: address ? [address, AladdinContractAddress] : undefined,
    query: {
      enabled: !!address,
      retry: 3,
      retryDelay: 1000
    }
  })

  // 等待交易确认
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: confirmError
  } = useWaitForTransactionReceipt({
    hash: (hash || txHash) as `0x${string}`,
    query: {
      enabled: !!(hash || txHash)
    }
  })

  // 等待交易确认的辅助函数
  const waitForTransaction = async (txHash: `0x${string}`) => {
    if (!publicClient) {
      throw new Error('Public client not available')
    }

    console.log('等待交易确认...', txHash)
    const receipt = await publicClient.waitForTransactionReceipt({
      hash: txHash,
      timeout: 60000 // 60秒超时
    })

    if (receipt.status === 'success') {
      console.log('交易成功确认:', txHash)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return receipt
    } else {
      throw new Error('交易失败')
    }
  }

  // USDT授权函数 - 使用导入的usdtAddress
  const approveUsdt = async (amount: string) => {
    setIsApproveUsdtLoading(true)
    try {
      console.log('开始授权USDT...')
      const amountWei = parseUnits(amount, USDT_DECIMALS)
      await writeContract({
        address: usdtAddress,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [AladdinContractAddress, amountWei]
      })

      // 等待授权交易确认
      if (hash) {
        await waitForTransaction(hash)
        // 刷新授权数据
        await refetchUsdtAllowance()
        console.log('USDT授权完成！')
      }

      return hash
    } catch (error) {
      console.error('Approve error:', error)
      throw error
    } finally {
      setIsApproveUsdtLoading(false)
    }
  }

  // 检查余额和授权的辅助函数
  const checkBalanceAndAllowance = (amount: string) => {
    const amountWei = parseUnits(amount, USDT_DECIMALS)

    const hasBalance = usdtBalance && (usdtBalance as bigint) >= amountWei
    const hasAllowance = usdtAllowance && (usdtAllowance as bigint) >= amountWei

    return {
      hasBalance,
      hasAllowance,
      needsApproval: hasBalance && !hasAllowance,
      balanceShort: !hasBalance,
      allowanceShort: !hasAllowance,
      currentBalance: usdtBalance
        ? formatUnits(usdtBalance as bigint, USDT_DECIMALS)
        : '0',
      currentAllowance: usdtAllowance
        ? formatUnits(usdtAllowance as bigint, USDT_DECIMALS)
        : '0'
    }
  }

  // 写入函数
  const deposit = async (amount: string, autoApprove: boolean = false) => {
    setIsDepositLoading(true)
    try {
      console.log('开始存款流程...')
      // 检查余额和授权
      const check = checkBalanceAndAllowance(amount)

      if (check.balanceShort) {
        throw new Error(
          `USDT余额不足。需要 ${amount} USDT，当前余额 ${check.currentBalance} USDT`
        )
      }

      // 如果需要授权且启用自动授权
      if (check.needsApproval) {
        if (autoApprove) {
          console.log('开始自动授权USDT...')
          await approveUsdt(amount)
          console.log('授权完成，开始存款...')
        } else {
          throw new Error(
            `需要先授权USDT给合约。当前授权额度: ${check.currentAllowance} USDT，需要: ${amount} USDT。请先调用 approveUsdt('${amount}') 或使用 deposit('${amount}', true) 进行自动授权`
          )
        }
      }

      console.log('开始存款...')
      const amountWei = parseUnits(amount, USDT_DECIMALS)
      await writeContract({
        address: AladdinContractAddress,
        abi: aladdinAbi,
        functionName: 'deposit',
        args: [amountWei]
      })

      // 等待存款交易确认
      if (hash) {
        await waitForTransaction(hash)
        // 刷新所有相关数据
        await refetchAll()
        console.log('存款成功完成！')
      }

      return hash
    } catch (error) {
      console.error('Deposit error:', error)
      throw error
    } finally {
      setIsDepositLoading(false)
    }
  }

  // 单独的授权函数，支持无限授权
  const approveUsdtUnlimited = async () => {
    setIsApproveUsdtUnlimitedLoading(true)
    try {
      console.log('开始授权无限额度USDT...')
      const maxAmount = BigInt(
        '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
      ) // 最大值
      await writeContract({
        address: usdtAddress,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [AladdinContractAddress, maxAmount]
      })

      // 等待授权交易确认
      if (hash) {
        await waitForTransaction(hash)
        await refetchUsdtAllowance()
        console.log('无限授权成功完成！')
      }

      return hash
    } catch (error) {
      console.error('Approve unlimited error:', error)
      throw error
    } finally {
      setIsApproveUsdtUnlimitedLoading(false)
    }
  }

  const withdraw = async (amount: string) => {
    setIsWithdrawLoading(true)
    try {
      console.log('开始提取...')
      const amountWei = parseUnits(amount, USDT_DECIMALS)
      await writeContract({
        address: AladdinContractAddress,
        abi: aladdinAbi,
        functionName: 'withdraw',
        args: [amountWei]
      })

      // 等待提取交易确认
      if (hash) {
        await waitForTransaction(hash)
        await refetchAll()
        console.log('提取成功完成！')
      }

      return hash
    } catch (error) {
      console.error('Withdraw error:', error)
      throw error
    } finally {
      setIsWithdrawLoading(false)
    }
  }

  const withdrawAll = async () => {
    setIsWithdrawAllLoading(true)
    try {
      console.log('开始提取所有资金...')
      await writeContract({
        address: AladdinContractAddress,
        abi: aladdinAbi,
        functionName: 'withdrawAll'
      })

      // 等待提取交易确认
      if (hash) {
        await waitForTransaction(hash)
        await refetchAll()
        console.log('提取所有资金成功完成！')
      }

      return hash
    } catch (error) {
      console.error('Withdraw all error:', error)
      throw error
    } finally {
      setIsWithdrawAllLoading(false)
    }
  }

  const sendToAddress = async (toAddress: string, amount: string) => {
    setIsSendToAddressLoading(true)
    try {
      console.log('开始转账...')
      const amountWei = parseUnits(amount, USDT_DECIMALS)
      await writeContract({
        address: AladdinContractAddress,
        abi: aladdinAbi,
        functionName: 'sendToAddress',
        args: [toAddress as `0x${string}`, amountWei]
      })

      // 等待转账交易确认
      setActionType('sendToAddress')

      return hash
    } catch (error) {
      console.error('Send to address error:', error)
      throw error
    } finally {
      setIsSendToAddressLoading(false)
    }
  }

  // 刷新所有数据
  const refetchAll = () => {
    refetchUserDeposit()
    refetchTotalDeposit()
    refetchTotalAmount()
    refetchUsdtBalance()
    refetchUsdtAllowance()
  }

  // 格式化数据为可读格式
  const formatUserDeposit = userDeposit
    ? formatUnits(userDeposit as bigint, USDT_DECIMALS)
    : '0'
  const formatTotalDeposit = totalDeposit
    ? formatUnits(totalDeposit as bigint, USDT_DECIMALS)
    : '0'
  const formatTotalAmount = totalAmount
    ? formatUnits(totalAmount as bigint, USDT_DECIMALS)
    : '0'
  const formatUsdtBalance = usdtBalance
    ? formatUnits(usdtBalance as bigint, USDT_DECIMALS)
    : '0'
  const formatUsdtAllowance = usdtAllowance
    ? formatUnits(usdtAllowance as bigint, USDT_DECIMALS)
    : '0'

  // 检查用户是否是合约所有者
  const isOwner =
    address &&
    owner &&
    (address as string).toLowerCase() === (owner as string).toLowerCase()

  return {
    // 原始数据
    userDeposit,
    totalDeposit,
    totalAmount,
    usdtTokenAddress: usdtAddress, // 返回导入的USDT地址
    owner,
    address,
    usdtBalance,
    usdtAllowance,

    // 格式化后的数据
    formatUserDeposit,
    formatTotalDeposit,
    formatTotalAmount,
    formatUsdtBalance,
    formatUsdtAllowance,

    // 写入函数
    deposit,
    withdraw,
    withdrawAll,
    sendToAddress,
    approveUsdt,
    approveUsdtUnlimited,

    // 工具函数
    checkBalanceAndAllowance,
    getUsdtBalanceManually, // 调试函数
    waitForTransaction, // 等待交易确认函数
    refetchAll,
    refetchUserDeposit,
    refetchTotalDeposit,
    refetchTotalAmount,
    refetchUsdtBalance,
    refetchUsdtAllowance,

    // 交易状态
    isPending,
    isConfirming,
    isConfirmed,
    confirmError,
    txHash: hash || txHash,
    actionType,
    setActionType,

    // 调试状态
    isBalanceLoading,
    isAllowanceLoading,
    balanceError,
    allowanceError,

    // 各个函数的loading状态
    isDepositLoading,
    isWithdrawLoading,
    isWithdrawAllLoading,
    isSendToAddressLoading,
    isApproveUsdtLoading,
    isApproveUsdtUnlimitedLoading,

    // 用户状态
    isOwner,
    isConnected: !!address
  }
}

// 单独的hook用于获取特定用户的存款
export const useUserDeposit = (userAddress?: string) => {
  const { data: userDeposit, refetch } = useReadContract({
    address: AladdinContractAddress,
    abi: aladdinAbi,
    functionName: 'getUserDeposit',
    args: [userAddress as `0x${string}`],
    query: {
      enabled: !!userAddress
    }
  })

  const formatUserDeposit = userDeposit
    ? formatUnits(userDeposit as bigint, USDT_DECIMALS)
    : '0'

  return {
    userDeposit,
    formatUserDeposit,
    refetch
  }
}
