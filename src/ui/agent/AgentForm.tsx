'use client'
import { Cross2Icon } from '@radix-ui/react-icons'
import {
  Badge,
  Box,
  Button,
  Callout,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextArea,
  TextField
} from '@radix-ui/themes'
import { useMemo, useState } from 'react'
import { defaultAgentClassification } from '@/constants'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'

type BaseForm = Omit<BaseAgent, 'id'> & { id?: number; agentPayType: string }
export default function AgentForm({ agent }: { agent?: Agent }) {
  const account = useAccount()
  const router = useRouter()
  const [baseForm, setBaseForm] = useState<BaseForm>(
    agent
      ? (agent as BaseForm)
      : {
          agentName: '',
          agentType: '', // 'browser-use' | 'virtual-machine'
          agentAddress: '',
          description: '',
          authorBio: '',
          agentCategory: 0,
          agentClassification: '',
          isPrivate: false,
          tags: [],
          autoAcceptJobs: true,
          isActive: true, // 默认为true
          reputation: 0,
          successRate: 0,
          totalJobsCompleted: 0,
          contractType: '', // 'result' | 'algorithm'
          walletAddress: account ? account.address : '',
          agentPayType: 'FREE'
        }
  )

  const payPerNumberFormInitialValue: Partial<
    Omit<PayPerNumberAgent, keyof BaseForm>
  > =
    agent && agent.agentPayType === 'PAY_PER_TASK'
      ? {
          pricePerNumber: agent.pricePerNumber,
          minPrice: agent.minPrice,
          maxPrice: agent.maxPrice
        }
      : {
          pricePerNumber: undefined,
          minPrice: undefined,
          maxPrice: undefined
        }
  const [payPerNumberForm, setPayPerNumberForm] = useState(
    payPerNumberFormInitialValue
  )

  const humanBasedHiringModelFormInitialValue: Partial<
    Omit<HumanBasedHiringModelAgent, keyof BaseForm>
  > =
    agent && agent.agentPayType === 'HUMAN_BASED_HIRING'
      ? {
          monthlySalary: agent.monthlySalary,
          bonus: agent.bonus,
          expectedDuration: agent.expectedDuration
        }
      : {
          monthlySalary: undefined,
          bonus: undefined,
          expectedDuration: undefined
        }
  const [humanBasedHiringModelForm, setHumanBasedHiringModelForm] = useState(
    humanBasedHiringModelFormInitialValue
  )

  const handleBaseFormChange = (key: keyof BaseForm, value: any) => {
    setBaseForm({ ...baseForm, [key]: value })
  }

  const handlePayPerNumberFormChange = (
    key: keyof PayPerNumberAgent,
    value: any
  ) => {
    setPayPerNumberForm({ ...payPerNumberForm, [key]: value })
  }

  const handleHumanBasedHiringModelFormChange = (
    key: keyof HumanBasedHiringModelAgent,
    value: any
  ) => {
    setHumanBasedHiringModelForm({ ...humanBasedHiringModelForm, [key]: value })
  }

  const [baseFormTags, setBaseFormTags] = useState('')

  const expectedMonthlyIncome = useMemo(() => {
    return (
      (humanBasedHiringModelForm.monthlySalary || 0) +
      (humanBasedHiringModelForm.bonus || 0)
    )
  }, [humanBasedHiringModelForm])

  const expectedTotalIncome = useMemo(() => {
    return (
      expectedMonthlyIncome * (humanBasedHiringModelForm.expectedDuration || 0)
    )
  }, [humanBasedHiringModelForm, expectedMonthlyIncome])

  const cancel = () => {
    router.back()
  }

  const confirm = () => {
    let result = { ...baseForm }
    if (baseForm.agentPayType === 'PAY_PER_TASK') {
      result = {
        ...result,
        ...payPerNumberForm
      }
    } else if (baseForm.agentPayType === 'HUMAN_BASED_HIRING') {
      result = {
        ...result,
        ...humanBasedHiringModelForm
      }
    }
    // todo:validate
    console.log('result', result)
  }

  return (
    <div className='w-full flex flex-col gap-y-4'>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>Agent Name</label>
        <TextField.Root
          className='w-full flex-1'
          size='3'
          value={baseForm.agentName}
          onChange={(e) => handleBaseFormChange('agentName', e.target.value)}
          placeholder='Enter agent name'
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>Tags</label>
        <div className='flex-1 w-full'>
          <TextField.Root
            className='w-full'
            size='3'
            value={baseFormTags}
            onChange={(e) => setBaseFormTags(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleBaseFormChange('tags', [...baseForm.tags, baseFormTags])
                setBaseFormTags('')
              }
            }}
            placeholder='Enter tags'
          />
          {baseForm.tags.map((tag, index) => (
            <Badge key={index} color='blue' variant='soft' className='mr-2'>
              {tag}{' '}
              <Cross2Icon
                className='cursor-pointer'
                onClick={() =>
                  handleBaseFormChange(
                    'tags',
                    baseForm.tags.filter((t, i) => i !== index)
                  )
                }
              />
            </Badge>
          ))}
        </div>
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>
          Auto Accept Jobs
        </label>
        <Switch
          size='3'
          checked={baseForm.autoAcceptJobs}
          onCheckedChange={(e) => handleBaseFormChange('autoAcceptJobs', e)}
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>
          Agent Classification
        </label>
        <Select.Root
          onValueChange={(value) => {
            handleBaseFormChange('agentClassification', Number(value))
          }}
          size='3'
          value={baseForm.agentClassification.toString()}>
          <Select.Trigger className='flex-1 w-full' />
          <Select.Content>
            {defaultAgentClassification.map((item) => (
              <Select.Item key={item.id} value={item.id.toString()}>
                {item.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>Agent Address</label>
        <TextField.Root
          className='w-full flex-1'
          size='3'
          value={baseForm.agentAddress}
          onChange={(e) => handleBaseFormChange('agentAddress', e.target.value)}
          placeholder='Enter agent address'
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>
          Agent Description
        </label>
        <TextArea
          className='w-full flex-1'
          size='3'
          value={baseForm.description}
          onChange={(e) => handleBaseFormChange('description', e.target.value)}
          placeholder='Enter agent description'
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>Author Bio</label>
        <TextArea
          className='w-full flex-1'
          size='3'
          value={baseForm.authorBio}
          onChange={(e) => handleBaseFormChange('authorBio', e.target.value)}
          placeholder='Enter author bio'
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>Is Free</label>
        <Switch
          size='3'
          checked={baseForm.agentPayType === 'FREE'}
          onCheckedChange={(e) =>
            handleBaseFormChange('agentPayType', e ? 'FREE' : '')
          }
        />
      </div>
      <motion.div
        className='border-t border-gray-200 overflow-hidden w-full flex flex-col gap-y-4'
        variants={{
          open: { height: 'auto' },
          closed: { height: 1 }
        }}
        initial='closed'
        animate={baseForm.agentPayType === 'FREE' ? 'closed' : 'open'}
        transition={{ duration: 0.3 }}>
        <h3 className='text-lg font-medium pt-4'>
          收费模式<span className='text-sm text-amber-300'>(请选择一种)</span>
        </h3>
        <div className='w-full flex gap-x-4 text-left'>
          <label className='w-[150px] shrink-0 font-medium'>
            Agent固定调用收费
          </label>
          <TextField.Root
            className='w-full flex-1'
            type='number'
            size='3'
            value={payPerNumberForm.pricePerNumber}
            onChange={(e) =>
              handlePayPerNumberFormChange(
                'pricePerNumber',
                Number(e.target.value)
              )
            }
            placeholder='Enter price per number'
          />
        </div>
        <div className='w-full flex items-center gap-x-4 text-left'>
          <label className='w-[150px] shrink-0 font-medium'>人类激励模式</label>
          <div className='w-full flex flex-col gap-y-4'>
            <Switch
              size='3'
              checked={baseForm.agentPayType === 'HUMAN_BASED_HIRING'}
              onCheckedChange={(e) =>
                handleBaseFormChange(
                  'agentPayType',
                  e ? 'HUMAN_BASED_HIRING' : 'PAY_PER_TASK'
                )
              }
            />
            {baseForm.agentPayType === 'HUMAN_BASED_HIRING' && (
              <>
                <div className='w-full flex items-center gap-x-4 text-left'>
                  <label className='w-[150px] shrink-0 font-medium'>
                    固定月薪
                  </label>
                  <TextField.Root
                    className='w-full flex-1'
                    type='number'
                    size='3'
                    value={humanBasedHiringModelForm.monthlySalary}
                    onChange={(e) =>
                      handleHumanBasedHiringModelFormChange(
                        'monthlySalary',
                        Number(e.target.value)
                      )
                    }
                    placeholder='Enter monthly salary'
                  />
                  USDT/月
                </div>
                <div className='w-full flex items-center gap-x-4 text-left'>
                  <label className='w-[150px] shrink-0 font-medium'>
                    期望奖金
                  </label>
                  <TextField.Root
                    className='w-full flex-1'
                    type='number'
                    size='3'
                    value={humanBasedHiringModelForm.bonus}
                    onChange={(e) =>
                      handleHumanBasedHiringModelFormChange(
                        'bonus',
                        Number(e.target.value)
                      )
                    }
                    placeholder='Enter bonus'
                  />
                  USDT/月
                </div>
                <div className='w-full flex items-center gap-x-4 text-left'>
                  <label className='w-[150px] shrink-0 font-medium'>
                    期望时长
                  </label>
                  <TextField.Root
                    className='w-full flex-1'
                    type='number'
                    size='3'
                    value={humanBasedHiringModelForm.expectedDuration}
                    onChange={(e) =>
                      handleHumanBasedHiringModelFormChange(
                        'expectedDuration',
                        Number(e.target.value)
                      )
                    }
                    placeholder='Enter expected duration'
                  />
                  个月
                </div>
                <Callout.Root size='1' className='w-full flex justify-between'>
                  <div className='w-full flex justify-between'>
                    <span>预计每月收入</span>
                    <span>
                      {expectedMonthlyIncome}
                      USDT/月
                    </span>
                  </div>
                </Callout.Root>
                <Callout.Root size='1' className='w-full flex justify-between'>
                  <div className='w-full flex justify-between'>
                    <span>预计总金额</span>
                    <span>
                      {expectedTotalIncome}
                      USDT
                    </span>
                  </div>
                </Callout.Root>
              </>
            )}
          </div>
        </div>
        <div className='w-full flex gap-x-4 text-left'>
          <label className='w-[150px] shrink-0 font-medium'>选择合约模式</label>
          <RadioGroup.Root
            defaultValue='1'
            name='contractType'
            className='flex items-center gap-x-4'
            value={baseForm.contractType}
            onValueChange={(value) =>
              handleBaseFormChange('contractType', value)
            }>
            <RadioGroup.Item value='result'>结果</RadioGroup.Item>
            <RadioGroup.Item value='algorithm'>算法</RadioGroup.Item>
          </RadioGroup.Root>
        </div>
        <div className='w-full flex gap-x-4 text-left'>
          <label className='w-[150px] shrink-0 font-medium'>
            是否托管质押收益
          </label>
          <Switch
            size='3'
            checked={baseForm.isPledged}
            onCheckedChange={(e) =>
              handleBaseFormChange('isPledged', e ? true : false)
            }
          />
        </div>
        <div className='w-full flex gap-x-4 text-left'>
          <label className='w-[150px] shrink-0 font-medium'>
            Agent 收益地址
          </label>
          <TextField.Root
            className='w-full flex-1'
            size='3'
            value={baseForm.walletAddress}
            onChange={(e) =>
              handleBaseFormChange('walletAddress', e.target.value)
            }
            placeholder='Enter agent wallet address'
          />
        </div>
      </motion.div>
      <div className='w-full flex items-center justify-end gap-x-4'>
        <Button color='orange' onClick={cancel}>
          取消
        </Button>
        <Button color='indigo' onClick={confirm}>
          确定
        </Button>
      </div>
    </div>
  )
}
