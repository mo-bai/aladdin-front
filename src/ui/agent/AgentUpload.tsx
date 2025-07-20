'use client'
import { Button, Dialog } from '@radix-ui/themes'
import AgentForm from './AgentForm'
import { UploadIcon } from '@radix-ui/react-icons'

interface AgentUploadProps {
  visible: boolean
  onSuccess: () => void
  onClose: () => void
}

export function AgentUpload(props: AgentUploadProps) {
  const { visible, onSuccess, onClose } = props
  return (
    <Dialog.Root open={visible}>
      {/* <Dialog.Trigger>
        <Button>
          <UploadIcon /> 上传代理
        </Button>
      </Dialog.Trigger> */}

      <Dialog.Content maxWidth='680'>
        <AgentForm
          onSuccess={() => onSuccess()}
          onCancel={() => onClose()}></AgentForm>
      </Dialog.Content>
    </Dialog.Root>
  )
}
