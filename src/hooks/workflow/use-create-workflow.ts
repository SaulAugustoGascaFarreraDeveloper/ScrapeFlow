
import { CreateWorkflowProps, CreateWorkflowSchema } from "@/schemas/workflows"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { onCreateWorkflow } from "@/actions/workflows"
import { useRouter } from "next/navigation"
import { toast } from "sonner"



export const useCreateWorkflow = () => {


    //const [loading,setLoading] = useState<boolean>(false)

    const router = useRouter()

    const methods = useForm<CreateWorkflowProps>({
        resolver: zodResolver(CreateWorkflowSchema),
        mode: "onChange"
    })

    const {mutate: createWorkflowMutate,isPending} = useMutation({
        mutationFn: onCreateWorkflow,
        onSuccess: (data) => {
            toast.success('Workflow created',{id: 'create-workflow'})
            //console.log("workfloe created !!")

            router.push(`/workflow/editor/${data.workflow?.id}`)

        },
        onError: () => {
            toast.error('Failed to create workflow',{id: 'create-workflow'})
            //console.log("workfloe failedddddd !!")
        }
    })

    // const onSubmit = useCallback((values: typeof formvalues) => {
        
    //     createWorkflowMutate(values)

    // },[])


    const handleSubmit = methods.handleSubmit(async (formvalues) => {

        try{

            
            createWorkflowMutate(formvalues)

          
        }catch(error)
        {

            console.log("Create Workflow Failed -->",error)

        }

    })


    return {loading:isPending,handleSubmit,methods}

}