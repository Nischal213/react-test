// Meant to be used with ContextHookExample.tsx
'use client'

import { useState } from "react"

export const useToggle = () => {
    const [toggle , setToggle] = useState(false)
    
    return {
        toggle,
        setToggle
    }
}