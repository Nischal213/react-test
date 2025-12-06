import React from 'react';

interface OperationProp {
    num1 : number,
    op : string,
    num2 : number
}

function test() {
    console.log("Hello")
}

const Operation : React.FC<OperationProp> = (props) => {
    const {num1 , op , num2} = props
    test()
    switch(op) {
        case "+" : return <h1> Result: {num1 + num2} </h1>
        case "-" : return <h1> Result: {num1 - num2} </h1>
        case "*" : return <h1> Result: {num1 * num2} </h1>
        case "/" : return <h1> Result: {num1 / num2} </h1>
        default : return <h2> Invalid set of inputs</h2>
    }
}

export default Operation;