import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'



function Cv() {


  return (
    <div className={styles.divCv}>

        <div className={styles.divCvIzquierda}>
            <h2 className={styles.h2} >Conocimientos</h2>

            <div className={styles.divConocimientos}>
                
                <Image src='/apertura.svg' alt='img apertura' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/html.svg' alt='img html' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/css.svg' alt='img css'  width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/js.svg' alt='img js' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/react.png' alt='img react'  width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/clausura.svg' alt='img clausura'  width={50} height={50} className={styles.fotoConocimiento}/>
                <div className={styles.divSub}>
                    <div className={styles.divSub1}>
                        <h4 className={styles.h4}>GIT</h4>
                        <h4 className={styles.h4}>Github</h4>
                        <h4 className={styles.h4}>Next js</h4>
                        <h4 className={styles.h4}>SCSS</h4>
                    </div>
                    <div className={styles.divSub2}>
                        <h4 className={styles.h4}>Bootstrap</h4>
                        <h4 className={styles.h4}>Firebase</h4>
                        <h4 className={styles.h4}>Next UI</h4>
                        <h4 className={styles.h4}>Balsamiq</h4>
                    </div>
                </div>
            </div>

                <h2 className={styles.h2}>Idiomas</h2>

                <div className={styles.divIdiomas}>
                    
                    <h4 className={styles.h4}>Español: nativo</h4>
                    <h4 className={styles.h4}>Inglés: intermedio/avanzado</h4>
                </div>
        </div>
        <div className={styles.divCvDerecha}>
            <div className={styles.divAptitudes}>

            </div>

            <div className={styles.divFormación}>

            </div>
        </div>
    
    </div>
  )
}

export default Cv