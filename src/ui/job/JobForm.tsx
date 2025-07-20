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
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'
import {
  defaultAgentClassification,
  jobPriorities,
  paymentTypes,
  skillLevels
} from '@/constants'
import dayjs from 'dayjs'
import { get, post } from '@/utils/http'
import { useQuery } from '@tanstack/react-query'
import { useAladdin } from '@/hooks/useAladdin'

type BaseForm = Omit<BaseJob, 'id'> & { id?: number }

interface JobFormProps {
  job?: Job
  onSuccess?: (job: Job) => void
  onCancel?: () => void
}
export default function JobForm(props: JobFormProps) {
  const { job, onSuccess, onCancel } = props
  const account = useAccount()
  const router = useRouter()
  const { deposit } = useAladdin()
  const [baseForm, setBaseForm] = useState<BaseForm>({
    jobTitle: '',
    category: '',
    description: '',
    paymentType: 'FREE_JOBS',
    deadline: '',
    priority: 'Low',
    deliverables: '',
    skillLevel: 'Beginner',
    autoAssign: true,
    allowBidding: false,
    escrowEnabled: false,
    walletAddress: account?.address || '',
    isPublic: true,
    status: 'OPEN',
    createdBy: account?.address || ''
  })

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => get<Category[]>('/api/agent-category/list?page=1&limit=100')
  })

  const freeJobFormInitialValue: Partial<Omit<FreeJob, keyof BaseForm>> =
    job && job.paymentType === 'FREE_JOBS'
      ? {
          budget: job.budget
        }
      : {
          budget: 50
        }
  const [freeJobForm, setFreeJobForm] = useState(freeJobFormInitialValue)

  const payPerTaskFormInitialValue: Partial<
    Omit<PayPerTaskJob, keyof BaseForm>
  > =
    job && job.paymentType === 'PAY_PER_TASK'
      ? {
          budget: job.budget,
          maxBudget: job.maxBudget
        }
      : {
          budget: 0,
          maxBudget: 0
        }
  const [payPerTaskForm, setPayPerTaskForm] = useState(
    payPerTaskFormInitialValue
  )

  const handleBaseFormChange = (
    key: keyof BaseForm,
    value: BaseForm[keyof BaseForm]
  ) => {
    setBaseForm({ ...baseForm, [key]: value })
  }

  const handleFreeJobFormChange = (key: keyof FreeJob, value: number) => {
    setFreeJobForm({ ...freeJobForm, [key]: value })
  }

  const handlePayPerTaskFormChange = (
    key: keyof PayPerTaskJob,
    value: number
  ) => {
    setPayPerTaskForm({ ...payPerTaskForm, [key]: value })
  }

  const cancel = () => {
    router.back()
  }

  const confirm = async () => {
    const createdBy = account.address
    if (!createdBy) {
      alert('请先登录你的 wallet')
      return
    }
    let result = { ...baseForm, createdBy }
    if (baseForm.paymentType === 'FREE_JOBS') {
      result = {
        ...result,
        ...freeJobForm
      }
    } else if (baseForm.paymentType === 'PAY_PER_TASK') {
      result = {
        ...result,
        ...payPerTaskForm
      }
    }
    // todo:扣钱
    if (baseForm.paymentType === 'FREE_JOBS') {
      // 质押50USDT
      try {
        console.log(`before 质押${(result as FreeJob).budget}USDT`)
        await deposit((result as FreeJob).budget.toString(), true)
        console.log(`after 质押${(result as FreeJob).budget}USDT`)
      } catch (error) {
        alert('质押失败')
        return
      }
    }
    if (baseForm.paymentType === 'PAY_PER_TASK') {
      const maxBudget = (result as PayPerTaskJob).maxBudget
      try {
        console.log(`before 质押${maxBudget}USDT`)
        await deposit(maxBudget.toString(), true)
        console.log(`after 质押${maxBudget}USDT`)
      } catch (error) {
        alert('质押失败')
        return
      }
    }

    try {
      const res = await post('/api/job/create', result)
      console.log('res', res)
      if (res) {
        onSuccess?.(res as Job)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='w-full flex flex-col gap-y-4'>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
          任务标题
        </label>
        <TextField.Root
          className='w-full flex-1'
          size='2'
          value={baseForm.jobTitle}
          onChange={(e) => handleBaseFormChange('jobTitle', e.target.value)}
          placeholder='输入任务标题'
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
          任务类别
        </label>
        <Select.Root
          onValueChange={(value) => {
            handleBaseFormChange('category', Number(value))
          }}
          size='2'
          value={baseForm.category.toString()}>
          <Select.Trigger className='flex-1 w-full' />
          <Select.Content>
            {categories?.map((item) => (
              <Select.Item key={item.id} value={item.id.toString()}>
                {item.name}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
          任务描述
        </label>
        <TextArea
          className='w-full flex-1'
          size='2'
          value={baseForm.description}
          onChange={(e) => handleBaseFormChange('description', e.target.value)}
          placeholder='输入任务描述'
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
          支付方式
        </label>
        <Select.Root
          onValueChange={(value) => {
            handleBaseFormChange('paymentType', value)
          }}
          size='2'
          value={baseForm.paymentType}>
          <Select.Trigger className='flex-1 w-full' />
          <Select.Content>
            {paymentTypes.map((item) => (
              <Select.Item key={item} value={item}>
                {item}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
      {baseForm.paymentType === 'FREE_JOBS' && (
        <div className='w-full flex gap-x-4 text-left'>
          <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
            押金
          </label>
          <TextField.Root
            className='w-full flex-1'
            type='number'
            size='2'
            disabled
            value={freeJobForm.budget}
          />
          <span className='leading-[32px]'>USDT</span>
        </div>
      )}
      {baseForm.paymentType === 'PAY_PER_TASK' && (
        <div className='w-full flex gap-x-4 text-left'>
          <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
            预算区间
          </label>
          <div className='flex-1 flex items-center justify-between gap-x-4'>
            <div className='flex items-center gap-x-4'>
              <TextField.Root
                className='w-full flex-1'
                type='number'
                size='2'
                value={Number(payPerTaskForm.budget)}
                onChange={(e) =>
                  handlePayPerTaskFormChange('budget', Number(e.target.value))
                }
              />
              <span>USDT</span>
            </div>
            <span>-</span>
            <div className='flex items-center gap-x-4'>
              <TextField.Root
                className='w-full flex-1'
                type='number'
                size='2'
                value={Number(payPerTaskForm.maxBudget)}
                onChange={(e) =>
                  handlePayPerTaskFormChange(
                    'maxBudget',
                    Number(e.target.value)
                  )
                }
              />
              <span>USDT</span>
            </div>
          </div>
        </div>
      )}
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
          任务期限
        </label>
        <TextField.Root
          type='date'
          className='w-full flex-1'
          size='2'
          value={dayjs(baseForm.deadline).format('YYYY-MM-DD')}
          onChange={(e) => {
            handleBaseFormChange(
              'deadline',
              dayjs(e.target.value).toISOString()
            )
          }}
          placeholder='输入任务期限'
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
          紧急度
        </label>
        <Select.Root
          onValueChange={(value) => {
            handleBaseFormChange('priority', value)
          }}
          size='2'
          value={baseForm.priority}>
          <Select.Trigger className='flex-1 w-full' />
          <Select.Content>
            {jobPriorities.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
          技能要求
        </label>
        <Select.Root
          onValueChange={(value) => {
            handleBaseFormChange('skillLevel', value)
          }}
          size='2'
          value={baseForm.skillLevel}>
          <Select.Trigger className='flex-1 w-full' />
          <Select.Content>
            {skillLevels.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium leading-[32px]'>
          交付要求
        </label>
        <TextArea
          className='w-full flex-1'
          size='2'
          value={baseForm.deliverables}
          onChange={(e) => handleBaseFormChange('deliverables', e.target.value)}
          placeholder='输入交付要求'
        />
      </div>

      <h2 className='text-lg font-medium'>高级选项</h2>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>自动分配</label>
        <Switch
          size='3'
          checked={baseForm.autoAssign}
          onCheckedChange={(e) =>
            handleBaseFormChange('autoAssign', e ? true : false)
          }
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>开启绑定</label>
        <Switch
          size='3'
          checked={baseForm.allowBidding}
          onCheckedChange={(e) =>
            handleBaseFormChange('allowBidding', e ? true : false)
          }
        />
      </div>
      <div className='w-full flex gap-x-4 text-left'>
        <label className='w-[150px] shrink-0 font-medium'>开启资金托管</label>
        <Switch
          size='3'
          checked={baseForm.escrowEnabled}
          onCheckedChange={(e) =>
            handleBaseFormChange('escrowEnabled', e ? true : false)
          }
        />
      </div>
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
