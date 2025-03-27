import BreadcrumHeader from '@/components/breadcrumheader'
import DesktopSidebar from '@/components/sidebar'
import { ModeToggle } from '@/components/theme-mode-toogle'
import { Separator } from '@/components/ui/separator'
import { SignedIn, UserButton } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

const Layout = ({children} : {children: ReactNode}) => {
  return (
    <div className="flex h-screen">
        <DesktopSidebar />
        <div className="flex flex-col flex-1 min-h-screen">
            <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
                <BreadcrumHeader />
                <div className="gap-3 flex items-center">
                    <ModeToggle />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <Separator />
            <div className="overflow-auto">
                <div className="flex-1 container py-4 text-accent-foreground">
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout