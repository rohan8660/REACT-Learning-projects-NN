import React from 'react';
import './myfrnds.css'

const myfrnds =({frnds,deletefrnd})=> {
    const frndslist = frnds.map(frnds =>{
        if(frnds.number > 1000000000){
            return(
                <div className="MyFrnds" key={frnds.id}>
                <a>Name: { frnds.name } &emsp;&emsp;</a>
                <a>Ph No: { frnds.number } &emsp;&emsp;</a>
                <button onClick={()=>{deletefrnd(frnds.id)}}>Delete this frnd</button>
                </div>
            )
        }
        else{
            return null
        }
    })

    return(
        <div className="frnds-list">
        <h1>myfrnds.js</h1>
        { frndslist }
        </div>        
    )
}
export default myfrnds;