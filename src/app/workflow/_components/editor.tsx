'use client'
import { Workflow } from '@prisma/client'
import React from 'react'
import {ReactFlowProvider} from '@xyflow/react'
import FlowEditor from './flow-editor'
import TopBar from './topbar/top-bar'
import TaskMenu from './task-menu'

type EditorProps= {
    workflow: Workflow
}

const Editor = ({workflow} : EditorProps) => {
  return (
    <ReactFlowProvider>
        <div className="flex flex-col w-full h-full overflow-hidden">
            <TopBar title='Workflow Editor' subtitle={workflow.name} workflowId={workflow.id} />
            <section className="flex h-full overflow-auto">
              <TaskMenu />
    	        <FlowEditor workflow={workflow} />
            </section>
        </div>
    </ReactFlowProvider>
  )
}

export default Editor