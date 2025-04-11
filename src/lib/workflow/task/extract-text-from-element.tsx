import { cn } from "@/lib/utils";
import { TaskParamType, TaskType } from "@/types";
import { CodeIcon, LucideProps, TextIcon } from "lucide-react";

export const ExtractTextFromElementTask = {

    type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
    label: "Extract text from element",
    icon: (props: LucideProps) => (<TextIcon {...props} className={cn("stroke-red-400")} />),
    isEntryPoint: false,
    inputs:[
        {
            name: "Html",
            type: TaskParamType.STRING,
            required: true,
            variant: "textarea"
            
        },
        {
            name: "Selector",
            type: TaskParamType.STRING,
            required: true,
            
        },
    ],
    outputs:[
        {
            name: "Extracted text",
            type: TaskParamType.STRING
        },
        
    ]

}