// Meant to be used with StateHookExample
'use client'

import { useState } from "react"

interface CounterResult {
    count : number
    increaseCount: () => void
    decreaseCount: () => void
    resetCount: () => void
}

export const useCounter = () : CounterResult => {
    const [count , setCount] = useState(0)

    const increaseCount = () => {
        setCount((prev) => prev + 1)
    }

    const decreaseCount = () => {
        setCount((prev) => prev - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return {
        count,
        increaseCount,
        decreaseCount,
        resetCount
    }
}