import React from 'react'
import { useFlag } from 'too-many-hooks'
import { Button, Modal as Modal_ } from '../../components'
import '../../index.css'

const Modal: React.FC = () => {
  const [isOpen, { flag: open, unflag: close }] = useFlag(false)

  return (
    <div className="bg-white h-screen w-screen flex flex-col items-center justify-center">
      <Button onClick={open}>Open modal</Button>
      <Modal_ isOpen={isOpen} onClose={close}>
        <div className="leading-8">
          This modal was opened with a simple<code>onClick=&#123;open&#125;</code>. Clicking
          <code>&#10005;</code> or outside of the modal will close it via
          <code>onClick=&#123;close&#125;</code>. No setters needed.
        </div>
      </Modal_>
    </div>
  )
}

export default Modal
