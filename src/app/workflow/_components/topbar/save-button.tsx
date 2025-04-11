'use client'
import { onUpdateWorkflow } from '@/actions/workflows'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useMutation } from '@tanstack/react-query'
import { useReactFlow } from '@xyflow/react'
import { CheckIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { title } from 'process'
import React from 'react'
import { toast } from 'sonner'

const SaveBtn = ({workflowId} : {workflowId: string}) => {

    const {toObject} = useReactFlow()

    const router = useRouter()

    const {mutate: UpdateWorkflowMutation,isPending} = useMutation({
        mutationFn: onUpdateWorkflow,
        onSuccess: (result) => {

            // if(result?.status === 200)
            // {
            //     toast({
            //         title: 'Sucess',
            //         description: result.message
            //     })
            // }

            toast.success(result?.message,{id:"save-worflow"})

            router.refresh()
            
        },
        onError: (error) => {

                    // toast({
                    //     title: 'Error',
                    //     description: error.message,
                    //     variant: 'destructive'
                    // })

                    toast.error(error.message,{id:"save-worflow"})
        }
        
    })

  return (
    <Button disabled={isPending} className='flex gap-2 items-center' 
        variant={'outline'} 
        onClick={() => {

            const workflowDefinition = JSON.stringify(toObject())
            
            UpdateWorkflowMutation({
            id: workflowId,
            definition: workflowDefinition
            })
        
        }} >
        <CheckIcon size={16} className='stroke-green-400' />
        Save
    </Button>
  )
}

export default SaveBtn