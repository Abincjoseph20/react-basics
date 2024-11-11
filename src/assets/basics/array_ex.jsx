import { data } from "./data";
import React from "react";
import './01_basics.css';


const USeArry=()=>{
const [ variable , fun_ctions ] = React.useState(data);


const RemvoSingleItem=(id)=> {
    const NewLarr = variable.filter((each_item)=> each_item.id !== id );
    fun_ctions(NewLarr);
}

const ClearAll = ()=>{
    fun_ctions([])
}


return  <div className="c">
    {variable.map((each_item)=>{
        const {id,name} = each_item;
        return(
            <div key={id}>
                <h1>{name}</h1>
                <button onClick={()=>RemvoSingleItem(id)}>remove</button>
            </div>
        )
    })}
    <br/>
    <br/>
    <button onClick={ClearAll}>Cleare all</button>
</div>;
}


export default USeArry;