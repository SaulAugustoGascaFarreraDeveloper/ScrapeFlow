"use server"

import prisma from "@/lib/prisma"
import { CreateWorkflowProps, CreateWorkflowSchema } from "@/schemas/workflows"
import { WorkflowStatus } from "@/types"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export const onGetWorkflowsForUser = async () => {

    try{

        const user = auth()

        if(!user.userId)
        {
            //throw new Error("Unauthenticated")
            return {status: 403,message:"Unathorized"}
        }


        const workflows = await prisma.workflow.findMany({
            where:{
                userId: user.userId as string
            },
            orderBy:{
                createdAt: "asc"
            }
        })

        if(workflows)
        {
            return {status: 200,workflows,message:"200 es aqui"}
        }

        return {status: 404,message:"Cannot Get Workflows For User"}

    }catch(error)
    {
        console.log("On Get Workflows For User Error -->" ,error)
        return {status: 500,message:"Internal Server Error !!"}
    }

}


export const onCreateWorkflow = async (form: CreateWorkflowProps) => {

    try{

        const {success,data} = CreateWorkflowSchema.safeParse(form)

        if(!success)
        {
            throw new Error("Invalid form data")
        }

        const user = auth()

        if(!user.userId)
        {
            return {status: 403,message:"Unauthorized"}
        }

        const workflow = await prisma.workflow.create({
            data:{
                userId: user.userId,
                status: WorkflowStatus.DRAFT,
                definition:'TODO',
                ...data

            }
        })


        if(workflow)
        {
            //redirect(`/workflow/editor/${workflow.id}`)
            return {status: 200, message:"Workflow created succesfully !!",workflow}
        }


        return{status: 404,message:"Failed to create workflow !!"}

    }catch(error)
    {
        console.log("On Create Workflow Error -->",error)
        return{status: 500,message:"Internal Server Error !!"}
    }

}


export const onDeleteWorkflow = async (id: string) => {

    try{

        const {userId} = await auth()

        if(!userId)
            {
                return {status: 403,message:"Unauthorized"}
            }

        const deletedWorkflow = await prisma.workflow.delete({
            where:{
                userId: userId as string,
                id: id as string
            }
        })


        if(deletedWorkflow)
        {
            revalidatePath('/workflows')
            return {status: 200,message:"workflow deleted succesfully !!"}
        }

        return {status: 404,message:"Failed to delete workflow !!"}

    }catch(error){
        console.log("On Delte Workflow Error -->" ,error)
        return {status: 500,message:"Internal Server Error !!"}
    }

}


export const onGetWorkflow = async (id: string,userId: string) => {

    try{

        const workflowData = await prisma.workflow.findUnique({
            where:{
                id: id,
                userId: userId
            }
        })

        return workflowData

    }catch(error)
    {
        console.log('On Get Workflow Error --> ',error)
    }

}