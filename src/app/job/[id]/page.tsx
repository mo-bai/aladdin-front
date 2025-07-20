import { Card } from '@radix-ui/themes'
import JobDistribute from '@/ui/job/JobDistribute'

export default async function AgentDetail({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <Card className='w-full max-w-3xl mx-auto p-6'>
      <JobDistribute jobId={Number(id)} visible={true}></JobDistribute>
    </Card>
  )
}
