import React, { useState } from 'react'

export default function Apple():JSX.Element {
    const[apple,setApple] = useState("Яблоко ");
    //const[click,setClick] = useState("Съешь меня!");
    const click :string =apple==='Яблоко' ?"Съешь меня!" :"верни яблоко!";

  
    function eatApple():void{
    
       // setApple("огрызок");
       // setClick("верни яблоко!");
        apple ==='Яблоко' ?setApple('огрызок') : setApple('Яблоко');
      
    }
    
  return (
    <div>
      <h2>{apple}</h2>
        <button type='button' onClick= {eatApple}>{click}</button>
        </div>
  );
}
