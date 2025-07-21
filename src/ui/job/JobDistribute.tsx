'use client'
import { useAladdin } from '@/hooks/useAladdin'
import { get, post } from '@/utils/http'
import { Box, Button, Dialog, Tabs, TextArea } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'

interface JobDistributeProps {
  jobId: number
  visible: boolean
}

type Distribute = {
  record: JobDistributionRecord & {
    jobDistributionAgents: JobDistributionAgent &
      {
        agent: Agent
      }[]
  }
  job: Job
}

export default function JobDistribute(props: JobDistributeProps) {
  const { jobId, visible } = props
  const {
    sendToAddress,
    actionType,
    txHash,
    waitForTransaction,
    setActionType,
    isPending,
    formatUserDeposit
  } = useAladdin()
  const { data, refetch } = useQuery({
    queryKey: ['distribute', jobId],
    queryFn: () => get<Distribute>(`/api/job/distribute/${jobId}`)
  })
  console.log('当前用户质押的金额', formatUserDeposit)
  const { job, agents } = useMemo(() => {
    if (!data)
      return {
        job: null,
        agents: null
      }
    const agents = data.record?.jobDistributionAgents.map((item) => {
      if (item.agent) {
        return {
          ...item.agent,
          agentStatus: item.agentStatus,
          result: item.result,
          assignedAt: item.assignedAt
        }
      } else {
        return null
      }
    })
    return {
      job: data.job,
      agents: agents?.filter((item) => item !== null)
    }
  }, [data])

  console.log('record', data)

  const winner = useMemo(() => {
    if (data?.record?.assignedAgentId) {
      return data.record.assignedAgentId
    }
    return null
  }, [data])

  const [rewardInfo, setRewardInfo] = useState<{
    jobId: number
    agentId: number
    agentName: string
  }>()
  const giveReward = async (agent: Agent) => {
    const { walletAddress, agentPayType } = agent
    try {
      if (job?.paymentType === 'FREE_JOBS') {
        const amount = (job as FreeJob).budget.toString()
        try {
          // 赎回质押的钱
          console.log(`before 赎回${amount}USDT`)
          await sendToAddress(walletAddress as string, amount)
          console.log(`after 赎回${amount}USDT`)
        } catch (error) {
          alert('付款失败')
        }
      }
      let amount = '0'
      if (
        agentPayType === 'PAY_PER_TASK' ||
        agentPayType === 'HUMAN_BASED_HIRING'
      ) {
        amount = agent.pricePerNumber.toString()
        console.log(`before 付款${amount}USDT to ${walletAddress}`)
        await sendToAddress(walletAddress as string, amount)
        console.log(`after 付款${amount}USDT to ${walletAddress}`)
      }
      setRewardInfo({
        jobId: job?.id as number,
        agentId: agent.id,
        agentName: agent.agentName
      })

      // refetch()
    } catch (error) {
      alert('付款失败')
    }
  }

  const [waiting, setWaiting] = useState(false)
  useEffect(() => {
    async function checkTx() {
      if (txHash && actionType && rewardInfo?.jobId) {
        if (actionType === 'sendToAddress') {
          setWaiting(true)
          await waitForTransaction(txHash)
          console.log('转账成功')
          await post(`/api/job/judge-result/${rewardInfo?.jobId}`, {
            agentId: rewardInfo?.agentId,
            agentName: rewardInfo?.agentName
          })
          setWaiting(false)
          refetch()
          setActionType(undefined)
        }
      }
    }
    checkTx()
  }, [
    txHash,
    actionType,
    waitForTransaction,
    setActionType,
    refetch,
    rewardInfo
  ])

  const loading = useMemo(() => {
    return isPending || waiting
  }, [isPending, waiting])

  const [currentTab, setCurrentTab] = useState('')

  return (
    // <Dialog.Root open={visible}>
    //   <Dialog.Content maxWidth='680'>

    //   </Dialog.Content>
    // </Dialog.Root>
    <div className='w-full flex flex-col gap-y-4'>
      <h3>{job?.jobTitle}</h3>
      {agents && agents.length > 0 ? (
        <Tabs.Root
          value={currentTab || agents[0].id.toString()}
          onValueChange={(e) => {
            setCurrentTab(e)
          }}>
          <Tabs.List>
            {agents.map((item) => (
              <Tabs.Trigger key={item.id} value={item.id.toString()}>
                {item.agentName} - {item.agentStatus}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box pt='3'>
            {agents.map((item) => (
              <Tabs.Content key={item.id} value={item.id.toString()}>
                <div className='flex flex-col gap-y-4'>
                  {winner && winner == item.id && (
                    <div className='text-red-400'>获胜者</div>
                  )}
                  {!winner && item.agentStatus == 'COMPLETED' && (
                    <Button loading={loading} onClick={() => giveReward(item)}>
                      给予奖励
                    </Button>
                  )}
                  {item.result && (
                    <TextArea
                      size='3'
                      className='h-[400px]'
                      value={item.result}
                      disabled></TextArea>
                  )}
                </div>
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      ) : (
        '暂无代理接单'
      )}
    </div>
  )
}
