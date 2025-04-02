import { onGetWorkflow } from '@/actions/workflows'
import { waitFor } from '@/lib/helper/waitFor'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import { string } from 'zod'
import Editor from '../../_components/editor'

type WorkflowEditorProps = {
    params:{
        workflowId: string
    }
}

const WorkflowEditor = async ({params}: WorkflowEditorProps) => {

    const workflowId = params.workflowId

    const {userId} = auth()

    if(!userId)
    {
        redirect('/sign-in')
    }

    await waitFor(5000)

    const workflow = await onGetWorkflow(workflowId,userId)

    if(!workflow)
    {
        return(
            <div>
                Workflow not found
            </div>
        )
    }

    

  return (
   <Editor workflow={workflow} />
  )
}

export default WorkflowEditor