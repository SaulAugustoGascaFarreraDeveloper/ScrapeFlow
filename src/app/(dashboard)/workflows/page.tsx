import { onGetWorkflowsForUser } from '@/actions/workflows'
import { Alert,AlertDescription,AlertTitle } from '@/components/ui/alert'
import { Skeleton } from '@/components/ui/skeleton'
import { waitFor } from '@/lib/helper/waitFor'
import { AlertCircle,InboxIcon,Loader2} from 'lucide-react'
import React, { Suspense } from 'react'
import CreateWorkflowDialog from './_components/create-workflow-dialog'
import WorkflowCard from './_components/workflow-card'
import { Workflow } from '@prisma/client'

const Workflows = () => {
  return (
    <div className="flex flex-1 flex-col h-full p-4">

        <div className="flex justify-between">
            <div className="flex flex-col gap-1">
                <h1 className='text-3xl font-bold'>
                    Workflows
                </h1>
                <p className='text-muted-foreground'>Manage your workflows</p>
            </div>
            <CreateWorkflowDialog />
        </div>

        <div className="h-full py-6">
            <Suspense fallback={<UserWorkflowsSkeleton /> }>
                <Userworkflows />
            </Suspense>
        
        </div>

    </div>
  )
}


function UserWorkflowsSkeleton(){
    return(
        <div className='space-y-2'>
            {[1,2,3,4].map((i) => (
                <Skeleton key={i} className='h-32 w-full bg-gradient-to-r from-gray-600 to-gray-900' />
            ))}
        </div>
    )
}


async function Userworkflows() {
   
  
    const workflows = await onGetWorkflowsForUser()

    if(workflows.status !== 200)
    {
        return(
            <Alert variant={'destructive'}>
                <AlertCircle  className='w-4 h-4'/>
                <AlertTitle>{workflows.message}</AlertTitle>
                <AlertDescription>Something went wrong, Please try again.</AlertDescription>
            </Alert>
         
        )
    }

    if(workflows.workflows?.length == 0)
    {
        return(
            <div className="flex flex-col gap-4 h-full items-center justify-center ">
                <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
                    <InboxIcon size={40} className='stroke-primary' />
                </div>
                <div className="flex flex-col gap-1 text-center">
                    <p className='font-bold'>No workflow created yet</p>
                    <p className="text-sm text-muted-foreground">
                        Click the button below to create your first workflow
                    </p>
                </div>
                <CreateWorkflowDialog triggerText='Create your first workflow' />
            </div>
        )
    }

    return (
      <div className='grid grid-cols-1 gap-4'>
        {workflows.workflows?.map((data,index) => (
            
            <WorkflowCard key={data.id} workflow={data} />
        ))}
      </div>
    );
  }


export default Workflows