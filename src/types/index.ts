import { Node } from "@xyflow/react";
import { string } from "zod";

export enum WorkflowStatus{
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED"
}

export enum TaskType{
    LAUNCH_BROWSER = 'LAUNCH_BROWSER',
    LAUNCH_AI = "LAUNCH_AI",
    PAGE_TO_HTML = "PAGE_TO_HTML",
    EXTRACT_TEXT_FROM_ELEMENT = "EXTRACT_TEXT_FROM_ELEMENT"
}


export enum TaskParamType{
    STRING = "STRING",
    BROWSER_INSTANCE = "BROWSER_INSTANCE"
}


export interface TaskParam{
    name: string
    type: TaskParamType
    helperText?: string
    required?: boolean
    hideHandle?: boolean
    value?: string
    [key: string]: any
}

export interface AppNodeData{
    [key: string]: any
    type: TaskType
    inputs: Record<string,string>
    //outputs: Record<string,string>
}


export interface AppNode extends Node {
    data: AppNodeData

    
}

export type ParamProps = {
    param: TaskParam
    value: string
    updateNodeParamValue: (newValue: string) => void
}
