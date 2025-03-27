"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ReactNode, useState } from "react"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query" 
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

export function AppProviders({
  children,
  ...props
}: {children: ReactNode}) {

  const [queryClient] = useState(() => new QueryClient())

  return (<QueryClientProvider client={queryClient}>
    <NextThemesProvider attribute={"class"} defaultTheme="system" {...props} enableSystem>{children}</NextThemesProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
  )
}