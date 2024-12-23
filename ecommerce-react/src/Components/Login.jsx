import React from 'react'
import { useActionState } from "react";
import { useNavigate } from "react-router-dom";
function Login()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const checkinputs =()=>
    {
        var temp=true; //replaces database response
        if(temp)
        Naviagte('/'); //Navigate to home page after validation with database
    else
    {
        return (<p>In valid inputs, please enter your username and password again</p>)
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
    </div>
)
}
export default Login;