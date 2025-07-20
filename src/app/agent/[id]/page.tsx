'use client'
import AgentForm from '@/ui/agent/AgentForm'
import { defaultAgents } from '@/constants'
import { Card } from '@radix-ui/themes'
import { useRouter, useParams } from 'next/navigation'

export default function AgentDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const agent = defaultAgents.find((agent) => agent.id === Number(id))

  return (
    <Card className='w-full max-w-3xl mx-auto p-6'>
      <AgentForm agent={agent} onCancel={() => router.back()} />
    </Card>
  )
}
