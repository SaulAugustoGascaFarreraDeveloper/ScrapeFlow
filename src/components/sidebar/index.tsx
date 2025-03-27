"use client"
import React, { useState } from 'react'
import Logo from '../logo'
import { routes } from '@/constants'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'

const DesktopSidebar = () => {

    const pathname = usePathname()
    const activeRoutes = routes.find(route => route.href.length > 0 && pathname.includes(route.href)) || routes[0]

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen w-full overflow-hidden 
    bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
        <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
            <Logo />
        </div>
        <div className='p-2'>TODO CREDITS</div>
        <div className="flex flex-col p-2">
            {routes.map((route,index) => (
                <Link key={index} href={route.href} className={buttonVariants({
                    variant: activeRoutes.href == route.href ? "sidebarActiveItem" : "sidebarItem"
                })}>
                    <route.icon size={20} />
                    {route.label}
                </Link>
            ))}
        </div>
    </div>
  )
}


export function MobileSidebar(){

    const [isOpen,setIsOpen] = useState<boolean>(false)

    const pathname = usePathname()
    const activeRoutes = routes.find(route => route.href.length > 0 && pathname.includes(route.href)) || routes[0]

    return(
        <div className='block block-separate bg-background md:hidden'>
            <nav className='container flex justify-between items-center px-8'>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant={'ghost'} > 
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className='w-[400px] sm:w-[540px]' side={'left'}>
                        <Logo />
                        <div className="flex-col flex gap-1 mt-5">

                        {routes.map((route,index) => (
                            <Link key={index} href={route.href} className={buttonVariants({
                                variant: activeRoutes.href == route.href ? "sidebarActiveItem" : "sidebarItem"
                            })}
                            onClick={() => setIsOpen(prev => !prev)}
                            >
                                <route.icon size={20} />
                                {route.label}
                            </Link>
                        ))}

                        </div>
                    </SheetContent>
                </Sheet>
            </nav>  
        </div>
    )
}

export default DesktopSidebar