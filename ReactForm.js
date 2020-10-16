import React, { useState } from 'react';


const App=()=>{
    const [name ,setName] = useState("");
    const [fullName , setFullName] = useState();
    const [lastname , setLastname] = useState("");
    const [LastName , setLastName] = useState();
    

    const onSubmit =(event)=>{
        event.preventDefault();
        setFullName(name)
        setLastName(lastname)
    }
    const inputEvent=(event)=>
    {
        console.log(event.target.value);
        setName(event.target.value)
    }
    const Event=(event)=>
    {
        console.log(event.target.value);
        setLastname(event.target.value)
    }

    
    
    

    return(
        <>
        <div>
        <form>
            <h1>Hello! {fullName} {LastName}</h1>
            <input type="text" placeholder="Enter Your First Name" onChange={inputEvent} value={name}></input>
            <input type="text" placeholder="Enter Your Last Name" onChange={Event} value={lastname}></input>
            <button onClick={onSubmit}>SUBMIT HERE</button>
        </form>
        </div>

        </>

    )
}
export default App;