import React, { useState } from "react";
import './01_basics.css';


const ObjectSeteup=()=>{

    const [name,nameSetup] = useState('Abin');
    const [age,AgeSetup] = useState(24);
    const [hobby,HobbySetup] = useState('pyaying gitar');


    const Clickeven=()=>{
        nameSetup('Sabin');
        AgeSetup(20)
        HobbySetup('video editing !')
    }

    return(
        <div className="c">
            <h1>{name}</h1>
            <h2>{age}</h2>
            <button onClick={Clickeven}>Change It</button>
        </div>
    )
}
export default ObjectSeteup;