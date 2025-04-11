import { cn } from '@/lib/utils'
import { TaskParamType, TaskType } from '@/types'
import { BotIcon, GlobeIcon, LucideProps } from 'lucide-react'
import React from 'react'

export const LaunchAITask = {
    type: TaskType.LAUNCH_AI,
    label: "Launch AI",
    icon: (props: LucideProps) => (<BotIcon  {...props} className={cn('stroke-pink-400', props.className)} />),
    isEntryPoint: true,
    inputs:[
        {
            name: 'AI Provider',
            type: TaskParamType.STRING,
            helperText: 'eg: chatgpt',
            required: true,
            hideHandle: true
        }
    ],
    outputs:[
        
    ]
}

