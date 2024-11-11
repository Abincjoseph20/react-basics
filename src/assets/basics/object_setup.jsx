import React, { useState } from "react";
import './01_basics.css';


const ObjectSeteup=()=>{
    const [person,setStatus] = useState({
        name:'abin',age:24,hobby:'playing guitar'
    });



    const Clickeven=()=>{
        setStatus({
            name:'sabin',
            age:20,
            hobby:'video editing'
        })
    }

    return(
        <div className="c">
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <h2>{person.hobby}</h2>
            <button onClick={Clickeven}>Change It</button>
        </div>
    )
}
export default ObjectSeteup;