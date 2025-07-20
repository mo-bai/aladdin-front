'use client'
import { Button, Dialog } from '@radix-ui/themes'
import JobForm from './JobForm'

interface JobUploadProps {
  visible: boolean
  onSuccess: () => void
  onClose: () => void
}

export function JobUpload(props: JobUploadProps) {
  const { visible, onSuccess, onClose } = props
  return (
    <Dialog.Root open={visible}>
      {/* <Dialog.Trigger>
        <Button>
          <UploadIcon /> 上传代理
        </Button>
      </Dialog.Trigger> */}

      <Dialog.Content maxWidth='680'>
        <JobForm
          onSuccess={() => onSuccess()}
          onCancel={() => onClose()}></JobForm>
      </Dialog.Content>
    </Dialog.Root>
  )
}
