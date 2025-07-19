import AgentForm from '@/ui/agent/AgentForm'
import { defaultAgents } from '@/constants'
import { Card } from '@radix-ui/themes'

export default async function AgentDetail({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const agent = defaultAgents.find((agent) => agent.id === Number(id))

  return (
    <Card className='w-full max-w-3xl mx-auto p-6'>
      <AgentForm agent={agent} />
    </Card>
  )
}
