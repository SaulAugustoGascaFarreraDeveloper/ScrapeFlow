import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'

const Logo = dynamic(() => import('@/components/logo'),{
    ssr: false
})


const Layout = ({children} : {children: ReactNode}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
        <Logo />
        {children}
    </div>
  )
}

export default Layout