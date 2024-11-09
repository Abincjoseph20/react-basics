// import './01_basics.css';
// // with oudt use starte 
// const ErrorExample = () => {
//     let count = 0;
  
//     const handleClick = () => {
//       count = count+1;
//       console.log(count);
//     };
  
//     return (
//       <div className="c">
//         <h2>{count}</h2>
//         <button type="button" onClick={handleClick} className="btn1">Click me</button> 
//       </div>
//     );
//   };
  




import { useState } from "react";
import './01_basics.css';


const ErrorExample=()=>{

    const [count,setCount] = useState(0);
    const handleClick =()=>{
        setCount(count+1);
    };
    return (
        <div className="c">
             <h2> You Clicked {count} Times </h2>
             <button type="button" onClick={handleClick} className="btn1">Click me</button> 
       </div>
    )

};



export default ErrorExample;