import JobForm from '@/ui/job/JobForm'
import { defaultJobs } from '@/constants'
import { Card } from '@radix-ui/themes'

export default async function AgentDetail({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const job = defaultJobs.find((job) => job.id === Number(id))

  return (
    <Card className='w-full max-w-3xl mx-auto p-6'>
      <JobForm job={job} />
    </Card>
  )
}
