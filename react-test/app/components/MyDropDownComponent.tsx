'use client'
import { useState } from "react"


interface DropDownProp {
    arr : string[]
}



export const MyDropDownComponent = (props : DropDownProp) => {
    const [option , setOption] = useState(props.arr[0])

    return (
        <div>
        <label>Choose a car:</label>
        <select name="cars" id="cars" value={option} onChange={(e) => {setOption (e.target.value)}}>
            {props.arr.map(i => <option key={i} value={i}> {i} </option>)}
        </select>
        {option == null? <h1> You haven't selected anything yet</h1>: <h1> You have selected {option}</h1>}
        </div>
    );
}