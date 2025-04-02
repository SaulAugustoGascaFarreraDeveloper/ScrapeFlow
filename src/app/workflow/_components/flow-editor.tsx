import { Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import React from 'react'
import "@xyflow/react/dist/style.css"
import { Workflow } from '@prisma/client'
import { CreateFlowNode } from '@/lib/workflow/create-flow-node'
import { TaskType } from '@/types'
import NodeComponent from './nodes/node-component'

type FlowEditorProps = {
    workflow: Workflow
}


const nodeTypes = {
  FlowScrapeNode: NodeComponent 
}

//ptoperties for improve our node flow space
const snapGrid: [number,number] = [50,50]
const fitViewOptions = {padding: 1}


const FlowEditor = ({workflow} : FlowEditorProps) => {

    const [nodes,setNodes,onNodesChange] = useNodesState([
      CreateFlowNode(TaskType.LAUNCH_BROWSER,{
        x: 70,y:400
      })
    ])
    
    const [edges,setEdges,onEdgesChange] = useEdgesState([])

  return (
    <main className='w-full h-full'>
        <ReactFlow nodes={nodes} 
        edges={edges} 
        onEdgesChange={onEdgesChange} 
        onNodesChange={onNodesChange} 
        nodeTypes={nodeTypes}
        snapToGrid={true}
        snapGrid={snapGrid}
        fitViewOptions={fitViewOptions}
        fitView={true}
        >
            <Controls position='top-left' fitViewOptions={fitViewOptions} />
            <Background variant={BackgroundVariant.Dots} color='black' gap={12} size={1} />
        </ReactFlow>
    </main>
  )
}

export default FlowEditor