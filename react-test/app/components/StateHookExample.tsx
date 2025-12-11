'use client'
import { useCounter } from "../hooks/useCounter";

export const StateHookExample = () => {
    const {count , increaseCount , decreaseCount , resetCount} = useCounter()

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={increaseCount}> Increase </button>
            <button onClick={decreaseCount}> Decrease </button>
            <button onClick={resetCount}> Reset</button>
        </div>
    )
}