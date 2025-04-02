import dynamic from 'next/dynamic'
import React from 'react'

const Loading = () => {

    const LoadingThree = dynamic(() => import('@/components/loading-three'),{
        ssr: false
    })

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
        <LoadingThree />
        <span>Loading ...</span>
    </div>
  )
}

export default Loading