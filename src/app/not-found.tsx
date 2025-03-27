
import { ArrowLeft } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'

const ThreeNotFound = dynamic(() => import("@/components/three-components/three-not-found"),{
    ssr: false
})


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
        <ThreeNotFound />
        <div className='text-center '>
            <h1 className='text-6xl font-bold text-primary mb-4'>404</h1>
            <h2 className='text-2xl font-semibold  mb-4'>Page Not Found</h2>
            <p className='text-muted-foreground mb-8 max-w-md'>
                Dont{"'"}t worry, even the best data sometimes get lost in the internet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={'/'} className='flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors' >
                    <ArrowLeft className='w-4 h-4 mr-2' />
                    Back to Dashboard
                </Link>
            </div>
            <div className="mt-12 text-center">
                <p className='text-sm text-muted-foreground'>
                    Please contact with out support.
                </p>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage