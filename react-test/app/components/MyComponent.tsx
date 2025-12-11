interface UserData {
    name : string
    age : number
}

export const Testing = (props : UserData) => {
    const {name , age} = props
    return (
        <div>
            <p> Hello {name} </p>
            <p> You are {age} years old!</p>
            <p> Also you are a {age > 18 ? "minor" : "adult"}!</p>
        </div>
    );
}