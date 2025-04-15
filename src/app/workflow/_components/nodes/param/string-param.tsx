'use client'
import { Input} from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ParamProps, TaskParam } from '@/types'
import React, { useEffect, useId, useState } from 'react'



const StringParam = ({param,value,updateNodeParamValue,disabled} : ParamProps) => {

    const [internalValue,setInternalValue] = useState(value)


        const id = useId()


        useEffect(() => {

          setInternalValue(value)

        },[value])

        type InputProps = React.ComponentProps<typeof Input>
        type TextareaProps = React.ComponentProps<typeof Textarea>

        

        type DynamicComponentProps = InputProps | TextareaProps

        let Component: React.ElementType<DynamicComponentProps>

        if(param.variant === "textarea")
        {
          Component = Textarea
        }else{
          Component = Input
        }

  return (
    <div className='space-y-1 w-full p-1'>
        <Label htmlFor={id} className='text-xs flex'>
            {param.name}
            {param.required && <p className='text-red-400 px-2'>*</p>}
        </Label>
        <Component id={id} value={internalValue} 
            placeholder='Enter value here' 
            onChange={(e: any) => setInternalValue(e.target.value)} 
            onBlur={(e: any) => updateNodeParamValue(e.target.value)}
            className='text-xs'
            disabled={disabled}
        />
        {param.helperText && (
            <p className='text-muted-foreground px-2'>{param.helperText}</p>
        )}
        
    </div>
  )
}

export default StringParam