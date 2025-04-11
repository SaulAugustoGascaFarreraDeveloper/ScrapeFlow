import { cn } from "@/lib/utils";
import { TaskParamType, TaskType } from "@/types";
import { CodeIcon, LucideProps } from "lucide-react";

export const PageToHtmlTask = {

    type: TaskType.PAGE_TO_HTML,
    label: "Get html from page",
    icon: (props: LucideProps) => (<CodeIcon {...props} className={cn("stroke-red-400")} />),
    isEntryPoint: false,
    inputs:[
        {
            name: "Web Page",
            type: TaskParamType.BROWSER_INSTANCE,
            required: true,
            
        }
    ],
    outputs:[
        {
            name: "Html",
            type: TaskParamType.STRING
        },
        {
            name: 'Web Page',
            type: TaskParamType.BROWSER_INSTANCE
        }
    ]

}