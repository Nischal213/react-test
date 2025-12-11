'use client'

import { createContext } from "react"
import { useToggle } from "../hooks/useToggle"

interface ToggleContextType {
    toggle : boolean
    setToggle : (value : boolean) => void
}

const defaultContext : ToggleContextType = { 
    toggle : false , 
    setToggle:() => {} }

const ToggleContext = createContext(defaultContext)

export const ContextHookExample = () => {
    const {toggle , setToggle} = useToggle()
    return {
        
    }

}