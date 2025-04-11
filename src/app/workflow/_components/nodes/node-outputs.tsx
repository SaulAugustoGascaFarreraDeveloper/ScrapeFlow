'use client'

import React, { ReactNode } from 'react'

const NodeOutputs = ({children} : {children: ReactNode}) => {
  return (
    <div className="flex flex-col gap-1 divide-y">
        {children}
    </div>
  )
}

export default NodeOutputs