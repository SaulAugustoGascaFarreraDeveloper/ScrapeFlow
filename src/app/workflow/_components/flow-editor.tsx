import { addEdge, Background, BackgroundVariant, Connection, Controls, Edge, ReactFlow, useEdgesState, useNodesState, useReactFlow } from '@xyflow/react'
import React, { useCallback, useEffect } from 'react'
import "@xyflow/react/dist/style.css"
import { Workflow } from '@prisma/client'
import { CreateFlowNode } from '@/lib/workflow/create-flow-node'
import { AppNode, TaskType } from '@/types'
import NodeComponent from './nodes/node-component'
import { TestFlowNode } from '@/lib/workflow/test-flow-node'
import TestNodeComponent from './nodes/test-node-component'
import DeletableEdge from './edges/deletable-edge'

type FlowEditorProps = {
    workflow: Workflow
}


const nodeTypes = {
  FlowScrapeNode: NodeComponent,
  FlowAINode: TestNodeComponent 
}


const edgeTypes = {
  default: DeletableEdge
}

//ptoperties for improve our node flow space
const snapGrid: [number,number] = [50,50]
const fitViewOptions = {padding: 1}


const FlowEditor = ({workflow} : FlowEditorProps) => {

    const [nodes,setNodes,onNodesChange] = useNodesState<AppNode>([
      // CreateFlowNode(TaskType.LAUNCH_BROWSER,{
      //    x: 70,y:400
      // }),
      // {
      //   id: '115',
      //   position:{
      //     x: 115,
      //     y: 115
      //   },
      //   //type:'saul115',
      //   data:{
      //     label:'saul 115',
      //     num1: 120
      //   },
        
        
      // }
      //TestFlowNode(TaskType.LAUNCH_AI)
    ])
    
    const [edges,setEdges,onEdgesChange] = useEdgesState<Edge>([])

    const {setViewport,screenToFlowPosition,updateNodeData} = useReactFlow()

    useEffect(() => {

        try{

          const flow = JSON.parse(workflow.definition)

          if(!flow) return

          setNodes(flow.nodes || [])
          setEdges(flow.edges || [])

          if(!flow.viewport) return

          const {x =0,y = 0,zoom = 1} = flow.viewport

          setViewport({x,y,zoom})

        }catch(error)
        {

        }

    },[workflow.definition,setEdges,setNodes,setViewport])


    const onDragOver = useCallback((event:React.DragEvent) => {

      event.preventDefault()

      event.dataTransfer.dropEffect = 'move'

    },[])


    const onDrop = useCallback((event:React.DragEvent) => {

      event.preventDefault()

      const taskType = event.dataTransfer.getData("application/reactflow")

      if(typeof taskType === 'undefined' || !taskType) return

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY
      })

      const newNode = CreateFlowNode(taskType as TaskType,position)

      setNodes(nds => nds.concat(newNode))

    },[])

    const onConnect = useCallback((connection: Connection) => {

      setEdges(eds => addEdge({...connection,animated: true},eds))

      if(!connection.targetHandle) return

      //remove input value if is present on connection
      const node = nodes.find(nds => nds.id === connection.target)

      if(!node) return

      const nodeInputs = node.data.inputs

      updateNodeData(node.id,{
        inputs:{
          ...nodeInputs,
          [connection.targetHandle]: ""

        }
      })

      console.log('@updated node',node.id)

    },[setEdges,updateNodeData,nodes])


    console.log("@nodes",nodes)

  return (
    <main className='w-full h-full'>
        <ReactFlow nodes={nodes} 
        edges={edges} 
        onEdgesChange={onEdgesChange} 
        onNodesChange={onNodesChange} 
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        snapToGrid={true}
        snapGrid={snapGrid}
        fitViewOptions={fitViewOptions}
        fitView={true}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onConnect={onConnect}
        >
            <Controls position='top-left' fitViewOptions={fitViewOptions} />
            <Background variant={BackgroundVariant.Dots} color='black' gap={12} size={1} />
        </ReactFlow>
    </main>
  )
}

export default FlowEditor