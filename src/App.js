import React, { useEffect, useState } from 'react';
import './App.css';
import { auth } from './firebase';
import Login from './Login';
import Home from './Home';
function App() {
  const [user,setUser]=useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        setUser(authUser)
      }
      else{
        setUser(null);
      }
    })
  },[])
  return (
    <div className="App">

      
       { user ? <Home user={user} />  : <h2>: <Login /> </h2>}
      
    </div>
  );
}

export default App;
