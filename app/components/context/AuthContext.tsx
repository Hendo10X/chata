'use client'

import { SessionProvider } from "next-auth/react"
import React, { Children } from "react"

interface AuthContextProps {
    children: React.ReactNode
}

export default function AuthContextProps({
    children
}: AuthContextProps) {
    return <SessionProvider>{ children}</SessionProvider>
}
