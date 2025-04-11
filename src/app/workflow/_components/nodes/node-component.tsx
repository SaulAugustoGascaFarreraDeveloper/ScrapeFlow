import { NodeProps } from '@xyflow/react'
import React, { memo } from 'react'
import NodeCard from './node-card'
import NodeHeader from './node-header'
import { AppNodeData } from '@/types'
import { TaskRegistry } from '@/lib/workflow/task/registry'
import NodeInputs from './node-inputs'
import { NodeInput } from './node-input'
import NodeOutputs from './node-outputs'
import NodeOutput from './node-output'

const NodeComponent = memo((props:NodeProps) => {

    const nodeData = props.data as AppNodeData

    const task = TaskRegistry[nodeData.type]
 
    return (
        <NodeCard nodeId={props.id} isSelected={props.selected as boolean} >
            <NodeHeader taskType={nodeData.type}  />
            <NodeInputs>
                {task.inputs.map((input,_) => (
                    <NodeInput key={input.name} input={input} nodeId={props.id} />
                ))}
            </NodeInputs>

            <NodeOutputs>
                {task.outputs.map((output,_) => (
                    <NodeOutput key={output.name} output={output} />
                ))}
            </NodeOutputs>
           
           
        </NodeCard>
      )

})

export default NodeComponent
NodeComponent.displayName = "NodeComponent"