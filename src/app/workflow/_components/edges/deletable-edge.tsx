'use client'

import { Button } from '@/components/ui/button'
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath, useReactFlow } from '@xyflow/react'
import React from 'react'

const DeletableEdge = (props: EdgeProps) => {

    const [edgePath,labelX,labelY] = getSmoothStepPath(props)

    const {setEdges} = useReactFlow()

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={props.markerEnd} style={{...props.style,stroke: 'black'}} />
      <EdgeLabelRenderer>
        <div style={{
          position: 'absolute',
          transform: `translate(-50%,-50%) translate(${labelX}px,${labelY}px)`,
          color: 'black',
          pointerEvents: 'all'
        }}>
          <Button 
            variant={'outline'} 
            size={'icon'} 
            className='border w-5 h-5 cursor-pointer rounded-full text-xs leading-none hover:shadow-lg hover:border-2 hover:border-black'
            onClick={() => {
              setEdges((edges) => edges.filter(edge => edge.id !== props.id))
            }}
          >
            X
          </Button>
        </div>
      </EdgeLabelRenderer>
    </>
  )
}

export default DeletableEdge