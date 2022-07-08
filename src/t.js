import React, { useState } from 'react'
import Kisi from './kisi.js'
function t() {   
    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [kisiler,setKisiler]=useState([]);
  return (

    <div>

<div className='home__kisiler'>
            {kisiler.map(({id,data})=>(
                <Kisi key={id} id={id} name={data.name} surname1={surname} surname={data.surname} name1={name} />
            ))}
        </div>
    </div>
  )
}

export default t