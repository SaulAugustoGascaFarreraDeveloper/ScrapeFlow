"use client"
import TooltipWrapper from '@/components/tooltip/tooltip-wrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { WorkflowStatus } from '@/types'
import { Workflow } from '@prisma/client'
import { FileTextIcon, MoreVerticalIcon, PlayIcon, ShuffleIcon, Trash } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import DeleteWorkflowDialog from './delete-worflow-dialog'


type WorkflowCardProps ={
    workflow: Workflow
}

const statusColor = {
    [WorkflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
    [WorkflowStatus.PUBLISHED]: "bg-primary",
}

const WorkflowCard = ({workflow} : WorkflowCardProps) => {
  
    const isDraft = workflow.status === WorkflowStatus.DRAFT

    return (
    <Card className='border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30 cursor-pointer'>
        <CardContent className='p-4 flex items-center justify-between h-[100px]'>
           <div className='flex items-center justify-end space-x-3'>
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center",
                        statusColor[workflow.status as WorkflowStatus]
                    )}>
                        {isDraft ? <FileTextIcon className='h-5 w-5 ' /> : <PlayIcon className='w-5 h-5 text-white' />}
                    </div>
                    <div>
                        <h3 className='text-base font-bold text-muted-foreground flex items-center'>
                            <Link href={`/workflow/editor/${workflow.id}`} className='flex items-center hover:underline'>
                                {workflow.name}
                            </Link>
                            {isDraft && (
                                <span className='ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full'>
                                    Draft
                                </span>
                            )}
                        </h3>
                </div>
           </div>
           <div className="flex items-center space-x-2">
                <Link href={`/workflow/editor/${workflow.id}`} className={cn(buttonVariants({
                        variant: "outline",
                        size:'sm'
                }),'flex items-center gap-2')}>
                <ShuffleIcon size={16} />
                        Edit
                </Link>
                <WorkflowActions wokflowName={workflow.name} workflowId={workflow.id} />
           </div>
        </CardContent>
    </Card>
  )
}

function WorkflowActions({wokflowName,workflowId}: {wokflowName: string,workflowId: string}) 
{

    const [showDeleteDialog,setShowDeleteDialog] = useState<boolean>(false)

    return(
        <>
            <DeleteWorkflowDialog open={showDeleteDialog} setOpen={setShowDeleteDialog} workflowName={wokflowName} workflowId={workflowId} />

            <DropdownMenu>
                <DropdownMenuTrigger asChild >
                    <Button variant={'outline'}>
                        <TooltipWrapper content={"More Actions"} >
                            <div className='flex items-center justify-center w-full h-full'>
                                <MoreVerticalIcon size={18} />
                            </div>
                        </TooltipWrapper>
                        
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>
                        Actions
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='text-destructive flex items-center gap-2 hover:cursor-pointer' onSelect={
                        () => setShowDeleteDialog(prev => !prev)
                    }>
                        <Trash size={16} />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            
            
            </DropdownMenu>
        </>
    )
}


export default WorkflowCard