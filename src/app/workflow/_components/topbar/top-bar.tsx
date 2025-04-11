'use client'
import TooltipWrapper from '@/components/tooltip/tooltip-wrapper'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import SaveBtn from './save-button'

type TopBarProps = {
    title: string
    subtitle?: string
    workflowId: string
}


const TopBar = ({title,subtitle,workflowId} : TopBarProps) => {

    const router = useRouter()

  return (
    <header className='flex p-2 sticky border-separate border-b-2 justify-between w-full h-[60px] top-0 bg-background z-10'>
        <div className="flex flex-1 gap-1">
            <TooltipWrapper content="Back">
                    <Button onClick={() => router.back()} variant={'ghost'} >
                        <ChevronLeftIcon size={20} />
                    </Button>
            </TooltipWrapper>
            <div className='flex flex-col gap-1'>
                <p className='font-bold text-ellipsis truncate'>{title}</p>
                {subtitle && (
                    <p className='text-xs text-muted-foreground truncate text-ellipsis'>
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
        <div className="flex justify-end gap-1 flex-1">
            <SaveBtn  workflowId={workflowId} />
        </div>
    </header>
  )
}

export default TopBar