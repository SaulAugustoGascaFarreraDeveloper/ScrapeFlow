import {z, ZodType} from "zod"

export type CreateWorkflowProps = {
    name: string,
    description?: string
}


export const CreateWorkflowSchema: ZodType<CreateWorkflowProps> = z.object({
    name: z.string().max(50),
    description: z.string().max(80).optional()
})