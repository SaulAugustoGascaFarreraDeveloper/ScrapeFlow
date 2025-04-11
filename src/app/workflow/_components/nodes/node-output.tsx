import { cn } from '@/lib/utils'
import { TaskParam } from '@/types'
import { Handle, Position } from '@xyflow/react'
import React from 'react'
import { ColorForHandle } from './common'

type NodeOutputProps = {
    output: TaskParam
}

const NodeOutput = ({output} : NodeOutputProps) => {
  return (
    <div className='flex  justify-end relative p-3 bg-secondary'>
        <p className='text-xs text-muted-foreground'>{output.name}</p>
        <Handle id={output.name} position={Position.Right} type='source' className={cn("!bg-muted-foreground !border-2 !-right-2 !border-background !w-4 !h-4",
            ColorForHandle[output.type]
        )} />
    </div>
  )
}

export default NodeOutput