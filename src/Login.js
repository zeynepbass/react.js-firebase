import React from "react";
import { auth, provider } from "./firebase";

import "./Login.css";


function Login() {
    const login=()=>{
auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    };
  return (
    <div className="login">


        <div className="container">
            <button onClick={login}>google ile girş yap</button>
        </div>
    </div>
  )
}

export default Login