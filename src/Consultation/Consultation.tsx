import { log } from 'console'
import React, { useEffect, useState } from 'react'

export default function Consultation():JSX.Element {
    //useEffect ничего не возвращает 
    // 1.Принемает функцию . это первый параметр
    // 2.принемает зависимости - это необязательный параметр
    // Component lifcycle
    // mount - первая отрисовка- установка. рождение 
    // update - обновления , изменения
    // unmount - когда перестаёт отрисовываться - смерть 
   const [numberOfTeeth,setNumberOfTeeth] = useState(0);
   const [url,setUrl] = useState ('')

   function handleToothGrowth():void {
    setNumberOfTeeth(numberOfTeeth +1); 
   }
   const [weight, setWeight] = useState(60);
  function handleTakeWeight(): void {
    setWeight(weight + 5);
  }
    // Пример 1 - пустой массив зависимостей 
        useEffect(()=>{
        console.log("UseEffect 1 -");    
    },[])
    // Пример 2 - не указаны зависимости - при первой отрисовке и при любых изменениях 
    useEffect(()=>{
        console.log("UseEffect 2 -");    
    })
    // Пример 3 - не указаны зависимости - при первой отрисовке(on first render) и при изменение этой зависимости 
    useEffect(()=>{
        console.log("UseEffect 3 -");    
    },[numberOfTeeth])
     // Пример 4 - не указаны зависимости - при первой отрисовке(on first render) и при изменение этой зависимости 
     useEffect(()=>{
        console.log("UseEffect 4 -");    
    },[weight])
     // Пример 5 - не указаны зависимости - при первой отрисовке(on first render) и при изменение этих зависимости 
     useEffect(()=>{
        console.log("UseEffect 5 -");    
    },[weight, numberOfTeeth])

    async function loadImage():Promise<void> {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const obj = await res.json();
        const {message} = obj
        setUrl(message);
    }
    useEffect(() =>{
        loadImage();
    },[numberOfTeeth]); // при нажатии кнопки с зубами , собачки тоже будут меняться 
    // чтобы не менялись  квадратные скобки оставить пустыми 

  return (
    <div>
        <h1>Повторим useEffect</h1>
        <p>Число зубов: {numberOfTeeth}</p>
        <p>Вес: {weight}</p>
        <button type='button' onClick={handleToothGrowth} >Вырастить зуб</button>
        <button type='button' onClick={handleTakeWeight} >набрать вес</button>
        <div>
            <img src={url} alt="dog" />
        </div>
    </div>
  )
}
