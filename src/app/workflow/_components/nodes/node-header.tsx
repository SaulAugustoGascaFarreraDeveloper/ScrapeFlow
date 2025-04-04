import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TaskRegistry } from '@/lib/workflow/task/registry'
import { TaskType } from '@/types'
import { CoinsIcon, GripVerticalIcon } from 'lucide-react'
import React from 'react'

type NodeHeaderProps = {
    taskType: TaskType
}


const NodeHeader = ({taskType} : NodeHeaderProps) => {

    const task = TaskRegistry[taskType]

  return (
    <div className='flex items-center p-2 gap-2'>
        <task.icon size={16} />
        <div className='flex justify-between items-center w-full'>
            <p className="text-xs font-bold uppercase text-muted-foreground">
                {task.label}
            </p>
            <div className="flex gap-1 items-center">
                {task.isEntryPoint && <Badge>Entry Point</Badge>}
                <Badge className='flex gap-2 items-center text-xs'>
                    <CoinsIcon size={16} />
                    TODO
                </Badge>
                <Button variant={'ghost'} size={'icon'} className='drag-handle cursor-grab'>
                    <GripVerticalIcon size={20} />
                </Button>
            </div>
        </div>
    </div>
  )
}

export default NodeHeader