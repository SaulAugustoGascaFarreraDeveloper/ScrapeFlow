import { cn } from '@/lib/utils'
import { TaskParamType, TaskType } from '@/types'
import { GlobeIcon, LucideProps } from 'lucide-react'
import React from 'react'

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: "Launch Browser",
    icon: (props: LucideProps) => (<GlobeIcon  {...props} className={cn('stroke-pink-400', props.className)} />),
    isEntryPoint: true,
    inputs:[
        {
            name: 'Website Url',
            type: TaskParamType.STRING,
            helperText: 'eg: https://www.google.com',
            required: true,
            hideHandle: true
        }
    ],
    outputs:[
        {
            name: "Web Page",
            type: TaskParamType.BROWSER_INSTANCE
        }
    ]
}
