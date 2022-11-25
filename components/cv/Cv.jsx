import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function Cv() {


  return (

    <div className={styles.divPresentation}>
        <Image src='/fotocv.png' width={250} height={300} className={styles.fotoCv}/>
        <h3 className={styles.h3Presentation}>JUAN CRUZ CORTIÑAS</h3>
        <h3 className={styles.h3Presentation}>FRONT-END DEVELOPER</h3>
    </div>
  )
}

export default Cv