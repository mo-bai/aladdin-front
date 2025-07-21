'use client'
import { useAladdin } from '@/hooks/useAladdin'

export default function Dashboard() {
  const {
    sendToAddress,
    actionType,
    txHash,
    waitForTransaction,
    setActionType,
    isPending,
    formatUserDeposit
  } = useAladdin()
  return (
    <div className='flex flex-col gap-y-4'>
      <h2>Dashboard</h2>
      <div>我质押的钱：{formatUserDeposit}</div>
    </div>
  )
}
