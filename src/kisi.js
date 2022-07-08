import React from 'react'
import db from './firebase'

function kisi({ id, name1, surname1,name, surname   }) {
    const sil=()=>{
        db.collection("kisiler").doc(id).delete();
    }
    const guncelle=()=>{
        db.collection("kisiler").doc(id).update({
            name:name1,
            surname:surname1,
        });
    }
    return (
    <div className='kisi'>
<h3>

        {name} {surname}
        </h3>

    <button onClick={sil}>sil</button>
    <button onClick={guncelle}>güncelle</button>
    </div>
    )
}

export default kisi