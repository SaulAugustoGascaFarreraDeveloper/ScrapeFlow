'use client'
import { onDeleteWorkflow } from '@/actions/workflows'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import { revalidatePath } from 'next/cache'
import React, { useState } from 'react'
import { toast } from 'sonner'

type DeleteWorkflowDialogProps = {
    open: boolean,
    setOpen: (open: boolean) => void,
    workflowName: string,
    workflowId: string
}


const DeleteWorkflowDialog = ({open,setOpen,workflowName,workflowId} : DeleteWorkflowDialogProps) => {

    const [confirmText,setConfirmText] = useState<string>('')

    

    const {mutate: deleteMutation,isPending} = useMutation({
        mutationFn: onDeleteWorkflow,
        onSuccess: () => {
            toast.success("Workflow deleted successfully",{id: workflowId})
            
            setConfirmText('')
            
        },
        onError: (error) => {
                console.log("Delete Mutation Error !!",error)
                toast.success("Failed workflow delete",{id: workflowId})
        }
    })

  return (
    <div className='flex items-center rounded-3xl px-6'>
        <AlertDialog open={open} onOpenChange={setOpen} >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure ?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your workflow data from our servers.
                        <div className="flex flex-col py-4 gap-2">
                            <p>If you are sure, enter <b>{workflowName}</b> to confirm.</p>
                            <Input value={confirmText} onChange={e => setConfirmText(e.target.value)} placeholder='type here...'  />
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setConfirmText('')}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => {
                        
                        toast.loading("Deleting workflow...",{id: workflowId})
                        deleteMutation(workflowId)
                    }} className='bg-destructive text-destructive-foreground hover:bg-destructive/90' disabled={confirmText !== workflowName || isPending}>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
    
  )
}

export default DeleteWorkflowDialog