"use client"
import CustomDialogHeader from '@/components/dialog/custom-dialog-header'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useCreateWorkflow } from '@/hooks/workflow/use-create-workflow'
import { Layers2Icon, Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { Form, useFormContext,FormProvider } from 'react-hook-form'

type CreateWorkflowDialogProps = {
    triggerText?: string
}


const FormInput = ({fieldName} : {fieldName: string}) => {

    const {register} = useFormContext() || {register: () => {}}


    return fieldName === 'name' ? (<>
        
        <Label htmlFor={'name'} className='flex gap-1 items-center' >
            Name
            <p className='text-primary'>(required)</p>
        </Label>
        <Input {...register(fieldName)} placeholder={`Please enter a ${fieldName} for the workflow`}  />
    
    </>) : (
        <>
            <Label htmlFor={'name'} className='flex gap-1 items-center' >
            Description
            <p className='text-muted-foreground'>(optional)</p>
            </Label>
            <Textarea {...register(fieldName)} placeholder={`Please enter a ${fieldName} for the workflow`} className='resize-none' />
        </>
    )

}

const CreateWorkflowDialog = ({triggerText} : CreateWorkflowDialogProps) => {

    const [open,setOpen] = useState<boolean>(false)

    const {handleSubmit,loading,methods} = useCreateWorkflow()

  return (
    <Dialog open={open} onOpenChange={(open) => {
        methods.reset()
        setOpen(open)
    }} >
        <DialogTrigger asChild >
            <Button>
                {triggerText ?? "Create Workflow"}
            </Button>
        </DialogTrigger>
        <DialogContent className='px-0'>
            <CustomDialogHeader 
                icon={Layers2Icon}
                title="Create workflow"
                subtitle="Start building your workflow"
            />
            <div className='p-6'>
                <FormProvider {...methods}>

                    <form onSubmit={handleSubmit} className='flex-col flex gap-6 w-full' >
                        
                        <div className='flex-col flex gap-4'>
                            <FormInput fieldName='name' />
                            <FormInput fieldName='description' />
                        </div>

                        <Button type='submit' className='w-full' disabled={loading} >
                            {loading ? <Loader2 className='animate-spin' /> : "Proceed"}
                        </Button>
                        
                    </form>

                </FormProvider>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default CreateWorkflowDialog