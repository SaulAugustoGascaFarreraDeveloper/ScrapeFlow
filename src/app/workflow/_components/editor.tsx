'use client'
import { Workflow } from '@prisma/client'
import React from 'react'
import {ReactFlowProvider} from '@xyflow/react'
import FlowEditor from './flow-editor'

type EditorProps= {
    workflow: Workflow
}

const Editor = ({workflow} : EditorProps) => {
  return (
    <ReactFlowProvider>
        <div className="flex flex-col w-full h-full overflow-hidden">
            <section className="flex h-full overflow-auto">
    	        <FlowEditor workflow={workflow} />
            </section>
        </div>
    </ReactFlowProvider>
  )
}

export default Editor