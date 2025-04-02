import { Node } from "@xyflow/react";
import { string } from "zod";

export enum WorkflowStatus{
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED"
}

export enum TaskType{
    LAUNCH_BROWSER = 'LAUNCH_BROWSER'
}


export enum TaskParamType{
    STRING = "STRING"
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
}


export interface AppNode extends Node {
    data: AppNodeData
}