"use client"
import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '../ui/breadcrumb'
import { MobileSidebar } from '../sidebar'

const BreadcrumHeader = () => {

    const pathname = usePathname()

    const paths = pathname === "/" ? [""] : pathname?.split("/")

  return (
    <div className="items-center flex flex-start">
        <MobileSidebar />
        <Breadcrumb>
            <BreadcrumbList>
                {paths.map((path,index) => (
                    <Fragment key={index} >
                        <BreadcrumbItem>
                            <BreadcrumbLink className='capitalize' href={`/${path}`}>
                                {path === "" ? "home" : path}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    </div>
  )
}

export default BreadcrumHeader