import React, { useState } from 'react';


const App=()=>{
    const [fullName ,setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        college:"",
    
    });
    const inputEvent=(event)=>
    {
        console.log(event.target.value);
        console.log(event.target.name);

        const {value,name} = event.target;
         setFullName((preValue) =>{
             console.log(preValue)
             return{
                 ...preValue,
                 [name]:value,
             }
     });
      
    };
        const onSubmit =(event)=>{
        event.preventDefault();
        alert("form submitted");
        }
    
    
    return(
        <>
        <div>
        <form>
            <h1><b>Hello! </b>{fullName.fname} {fullName.lname}</h1>
            <p><b>{fullName.college}</b></p>
            <p><b>{fullName.email}</b></p>
            <p><b>{fullName.phone}</b></p>
            <input type="text" placeholder="Enter Your First Name" name="fname" onChange={inputEvent} value={fullName.fname}></input> <br/>
            <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={fullName.lname}></input> <br/>
            <input type="text" placeholder="Enter Your College Name" name="college" onChange={inputEvent} value={fullName.college}></input> <br/>
            <input type="email" placeholder="Enter Your Gmail" name="email" onChange={inputEvent} value={fullName.email}></input> <br/>
            <input type="number" placeholder="Enter Your Mobile" name="phone" onChange={inputEvent} value={fullName.phone}></input> <br/>
            <button onClick={onSubmit}>SUBMIT HERE</button>
        </form>
        </div>

        </>

    )
}
export default App;
