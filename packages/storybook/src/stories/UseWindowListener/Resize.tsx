import { useWindowListener } from '@yobgob/too-many-hooks'
import React from 'react'

interface Props {
  addResizeAction: (...data: unknown[]) => void
}

const Resize: React.FC<Props> = ({ addResizeAction }) => {
  useWindowListener('resize', e =>
    addResizeAction(`Window resized to ${window.innerWidth} x ${window.innerHeight}`, e),
  )

  return (
    <div className="prose text-4xl">
      Resize this window to trigger listener events, viewable in the &quot;Actions&quot; tab
    </div>
  )
}

export default Resize
