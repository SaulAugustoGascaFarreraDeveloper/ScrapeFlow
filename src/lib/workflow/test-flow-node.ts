import { AppNode, TaskType } from "@/types";

export const TestFlowNode = (nodeType: TaskType): AppNode => {
    return{
        id: crypto.randomUUID(),
        position:{
            x: 70,
            y: 70
        },
        type:'FlowAINode',
        data:{
            type: nodeType,
            inputs: {}
        },
        
    }
}