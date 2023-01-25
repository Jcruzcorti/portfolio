import React from 'react'
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import NavBar from '../navbar/NavBar';
// import Link from 'next/link';


function Presentation() {


  return (

    <div className={styles.divPresentation}>
     <div className={styles.divStart}>
     <Image src='/fotocv2.png' alt='img cv' priority={true} width={220} height={280} className={styles.fotoCv}/>
        <h3 className={styles.h3Presentation}>JUAN CRUZ CORTIÑAS</h3>
        <h3 className={styles.h3Presentation}>FRONT-END DEVELOPER</h3>
        
      </div>
      <NavBar/>
    </div> 
  )
}

export default Presentation;