import { cn } from '@/lib/utils'
import { TaskParam } from '@/types'
import { Handle, Position } from '@xyflow/react'
import React from 'react'

export const NodeInput = ({input} : {input: TaskParam}) => {
  return (
    <div className='flex justify-start relative p-3 bg-secondary w-full'>
        {/* NodePramField  */}
        <pre>{JSON.stringify(input,null,4)}</pre>
        {!input.hideHandle && (
             <Handle id={input.name} type='target' 
             position={Position.Left} 
             className={cn('!bg-muted-foreground !border-2 !border-background !-left-2 !w-4 !h-4')} 
         />
        )}
       
    </div>
  )
}
