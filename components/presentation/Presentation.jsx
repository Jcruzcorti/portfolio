import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

function Presentation() {


  return (

   <div className={styles.divPresentation}>
     <div className={styles.divStart}>
        <Image src='/fotocv.png' alt='img cv' priority={true} width={250} height={300} className={styles.fotoCv}/>
        <h3 className={styles.h3Presentation}>JUAN CRUZ CORTIÑAS</h3>
        <h3 className={styles.h3Presentation}>FRONT-END DEVELOPER</h3>
    </div>

    <div className={styles.divLinks}>
      <Link href='#Cv' scroll={false}><Image src='/imgcv.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/></Link>
      <Image src='/imgportfolio.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/>
      <Image src='/imgsobremi.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/>
    </div>
   </div> 
  )
}

export default Presentation;