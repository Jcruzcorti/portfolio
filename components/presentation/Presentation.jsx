import React from 'react'
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import NavBar from '../navbar/NavBar';
// import Link from 'next/link';


function Presentation() {


  return (

  <div className={styles.DivPrimaryPresentation}>
    <div className={styles.divPresentation}>
      <div className={styles.divStart}>
          <h2 className={styles.h2}>Hola! Soy Juan Cruz Cortiñas</h2>
          <h3 className={styles.h3}>Front-end Developer</h3>
          
        </div>
        <div className={styles.divStart2}>
          <Image src='/fotocv.png' alt='img cv' priority={true} width={220} height={200} className={styles.fotoCv}/> 
        </div>
        
    </div> 
    <NavBar/>
  </div>
  )
}

export default Presentation;