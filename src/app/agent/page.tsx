'use client'
import { useCallback, useState } from 'react'
import { Avatar, Badge, Box, Button, Tabs, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon, UploadIcon } from '@radix-ui/react-icons'
import { defaultCategories, defaultAgents } from '@/constants'
import { useRouter } from 'next/navigation'

type Category = {
  id: number
  name: string
  icon?: string
  description?: string
}

export default function Agent() {
  const router = useRouter()
  const [filter, setFilter] = useState({
    category: 0,
    search: ''
  })
  const [visible, setVisible] = useState(false)
  const [categories, setCategories] = useState<Category[]>([
    ...defaultCategories
  ])
  const [agents, setAgents] = useState<
    (FreeAgent | PayPerNumberAgent | HumanBasedHiringModelAgent)[]
  >([...defaultAgents])

  const showVisible = useCallback(() => {
    setVisible(true)
  }, [])

  return (
    <>
      {/* 搜索栏 */}
      <div className='flex items-center gap-x-1 gap-4 mb-8'>
        <TextField.Root
          className='w-full px-4 py-2 rounded-lg focus:outline-none bg-transparent'
          size='2'
          placeholder='搜索代理...'>
          <TextField.Slot>
            <MagnifyingGlassIcon height='16' width='16' />
          </TextField.Slot>
        </TextField.Root>
        <Button onClick={showVisible}>
          <UploadIcon /> 上传代理
        </Button>
      </div>
      {/* 分类标签 */}
      <div className='w-full mb-8'>
        <Tabs.Root defaultValue='0'>
          <Tabs.List color='indigo' justify='center'>
            {categories.map((item) => (
              <Tabs.Trigger
                key={item.id}
                onClick={() => setFilter({ ...filter, category: item.id })}
                value={item.id.toString()}>
                {item.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </div>
      {/* 代理列表 */}
      <section>
        <h2 className='text-2xl font-bold mb-6'>代理列表</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {agents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => router.push(`/agent/${agent.id}`)}
              className='bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow'>
              <div className='w-full flex'>
                <Box width='64px' height='64px'>
                  <Avatar fallback='A' />
                </Box>

                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-1'>
                    <span className='text-base font-semibold'>
                      {agent.agentName}
                    </span>
                    <Badge color='blue'>{agent.agentClassification}</Badge>
                  </div>
                  <div className='flex items-center text-sm mb-1'>
                    <span className='text-yellow-400'>★</span>
                    <span className='ml-1'>{agent.reputation}</span>
                    <span className='text-gray-500 ml-1'>(100评价)</span>
                  </div>
                  <p className='text-gray-600 mb-4 text-xs'>
                    {agent.description}
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 mb-4'>
                {agent.tags.map((tag, index) => (
                  <Badge key={index} color='gray' variant='soft'>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className='flex items-center justify-between  text-xs'>
                <div className='font-semibold flex items-center gap-x-2'>
                  {agent.agentPayType === 'free'
                    ? '免费'
                    : agent.agentPayType === 'pay_per_task'
                    ? `${agent.pricePerNumber} USDT/次`
                    : `${agent.monthlySalary} USDT/月`}
                  {agent.agentPayType === 'free' ? null : (
                    <Badge color='blue'>
                      {agent.agentPayType === 'pay_per_task'
                        ? '按次收费'
                        : '人类雇佣'}
                    </Badge>
                  )}
                </div>
                {agent.contractType}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
