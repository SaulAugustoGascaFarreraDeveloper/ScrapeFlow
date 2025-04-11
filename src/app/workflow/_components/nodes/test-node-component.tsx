import { TaskRegistry } from "@/lib/workflow/task/registry";
import { AppNodeData } from "@/types";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { memo } from "react";
import NodeInputs from "./node-inputs";
import NodeHeader from "./node-header";
import NodeCard from "./node-card";

const TestNodeComponent = memo(({data,id,selected}: NodeProps) => {


   const nodeData = data as AppNodeData

   const task = TaskRegistry[nodeData.type]

   return(
        <NodeCard nodeId={id} isSelected={selected!}  >
            <NodeHeader taskType={task.type}  />
        </NodeCard>
   )

})


export default TestNodeComponent
TestNodeComponent.displayName = "TestNodeComponent"