import { useContext, useState } from "react"
import React from 'react'
import UserContext from "../context/userContext"

export default function Login() {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState('');

    const {setUser} = useContext(UserContext);
    function handleSubmit(e){
        e.preventDefault();
        setUser({username, pass});
    }
    return (
        <>

            <div>login page</div>
            <input type="text" placeholder="username"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}} />
                {'   '}
            <input type="password" placeholder="Password" 
            value={pass}
                onChange={(e) => {setPass(e.target.value)}}/>

            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}
