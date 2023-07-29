import React from 'react'
import PetRecord from '../PetRecord/PetRecord'
import hugoPicture from './image/Hugo.jpg';
import kroshPicture from './image/Krosh.jpg';
import styles from './Pet.module.css'

export default function Pet():JSX.Element {
  return (
    <div className={styles.container}>
        <PetRecord id = {1} petName='Hugo' additionalInfo='Cat . British. Age: 5 years.Color is grey. Weight: 8.200 kg' displayInfo = {true} />
        <img className={styles.img} src={hugoPicture} alt="Hugo" />
        <PetRecord id={2} petName='Krosh' additionalInfo='Rabbit. Age: 6 years. Color is apricot-black. Weight: 1.300 kg' displayInfo={true}/>
        <img className={styles.img} src={kroshPicture} alt="Krosh" />
        <PetRecord id={3} petName='Bim' additionalInfo='' displayInfo={false}/>
    </div>
  )
}
