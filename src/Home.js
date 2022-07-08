import React, { useEffect, useState } from 'react'
import db, { auth} from "./firebase";
import Kisi from './kisi.js'
import './home.css'
function Home({user}) {
    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [kisiler,setKisiler]=useState([]);
    const add=(e)=>{
        e.preventDefault();
        db.collection("kisiler").add({
            name:name,
            surname:surname,
        });
        setName("");
        setSurname("");
    }
    useEffect(()=>{
        db.collection("kisiler").onSnapshot(snapshot=>(
            setKisiler(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data(),

                }
            )))
        ))
    },[])
  return (
    <div className='home'>
        <h4>HOSGELDINIZ {user.displayName}  </h4>
        <button onClick={()=>auth.signOut()}>cıkıs yap</button>
        <form>
            isim
            <input type="text" value={name} onChange={(e)=>setName(e.target.value) } ></input>
            soyisim
            <input type="text" value={surname} onChange={(e)=>setSurname(e.target.value) } ></input>
            <button onClick={add} >Ekle</button>
        </form>
        <div className='home__kisiler'>
            {kisiler.map(({id,data})=>(
                <Kisi key={id} id={id} name={data.name} surname1={surname} surname={data.surname} name1={name} />
            ))}
        </div>
    </div>
  )
}

export default Home