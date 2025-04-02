"use client"
import React, { ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

type TooltipWrapperProps = {
    children: ReactNode
    content: ReactNode
    side?: "top" | "bottom" | "left" | "right" 
}


const TooltipWrapper = ({children,content,side} : TooltipWrapperProps) => {
  return (
    <TooltipProvider delayDuration={0}>
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side}>
                {content}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipWrapper