import {
  useChainId,
  usePublicClient,
  useWaitForTransactionReceipt,
  useReadContract,
  useWriteContract,
  useAccount
} from 'wagmi'
import { AladdinContractAddress } from '@/constants'
import { aladdinAbi } from '@/abis/aladdinAbi'

export const useAladdin = () => {
  const { address } = useAccount()
  const { data: usdt } = useReadContract({
    address: AladdinContractAddress,
    abi: aladdinAbi,
    functionName: 'getUserDeposit',
    args: [address],
    query: {
      enabled: !!address
    }
  })

  return {
    usdt,
    address
  }
}
