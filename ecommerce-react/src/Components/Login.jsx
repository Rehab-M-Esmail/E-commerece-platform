//import React from 'react'
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
function Login()
{
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");

    //const Navigate = useNavigate();
    const checkinputs = (e) => {
    e.preventDefault(); //stop the page from refreshing

        //var temp=true; //replaces database response
        const isUsernameValid = USER_REGEX.test(username);
        const isPasswordValid = PWD_REGEX.test(password);
        if(isUsernameValid &&isPasswordValid){
            setResult("done");
           //Navigate('/'); //Navigate to home page after validation with database
        }
    else
    {
        setResult("In valid inputs, please enter your username and password again");
    }
    }
return (
    <div className='LoginForm'>
        <h1>Log in</h1>
        <form className='form' onSubmit={checkinputs}>
        <input type='text'
        name="userName"
        placeholder='username'
        className="form-control" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
        <input type='password' 
        name="password" 
        placeholder='password' 
        className="form-control" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Submit </button>
        </form>
        <div>
            <p>{result}</p>
        </div>
    </div>
)
}
export default Login;