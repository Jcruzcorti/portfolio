import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'



function Cv() {


  return (
    <div className={styles.divCv} id={'Cv'}>


        <div className={styles.divCvIzquierda}>

            <h2 className={styles.h2}>Formación académica</h2>
            <div className={styles.divFormación}>
                <p className={styles.h4}>Bachiller orientado en economía y gestión de las organizaciones en Instituto Juan Zorrilla de San Martín 2008-2013</p>
                <p className={styles.h4}>Licenciatura en Psicología en Facultad de Psicología UNC. 2015 - Actualidad</p>
                <Link href={'https://jcruzcorti.github.io/CV/img/certificadocoder-copia.png'}  target='_blank'><p className={styles.h4}>Curso de Desarrollo web en Coderhouse-Ver certificación</p></Link>
                <Link href={'https://jcruzcorti.github.io/CV/img/js.png'}  target='_blank'><p className={styles.h4}>Curso de Javascript en Coderhouse-Ver certificación</p></Link>
                <Link href={'https://jcruzcorti.github.io/CV/img/reactjs.png'}  target='_blank'><p className={styles.h4}>Curso de React Js en Coderhouse-Ver certificación</p></Link>

            </div>
            
            <h2 className={styles.h2}>Aptitudes</h2>
            <div className={styles.divAptitudes}>
                <p className={styles.h4}>Resolución de problemas, buena comunicación, adaptabilidad, organización/orden</p>
                <p className={styles.h4}>Esfuerzo, constancia, positividad</p>
                <p className={styles.h4}>Proactividad, autodidacta, empatía, autonomía</p>
            </div>
        </div>
    

        <div className={styles.divCvDerecha}>
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
                        <p className={styles.h4}>HTML</p>
                        <p className={styles.h4}>CSS</p>
                        <p className={styles.h4}>GIT</p>
                        <p className={styles.h4}>Github</p>
                        <p className={styles.h4}>Next js</p>
                        <p className={styles.h4}>SCSS</p>
                    </div>
                    <div className={styles.divSub2}>
                        <p className={styles.h4}>JavaScript</p>
                        <p className={styles.h4}>React js</p>
                        <p className={styles.h4}>Bootstrap</p>
                        <p className={styles.h4}>Firebase</p>
                        <p className={styles.h4}>Next UI</p>
                        <p className={styles.h4}>Balsamiq</p>
                    </div>
                </div>
            </div>

                <h2 className={styles.h2}>Idiomas</h2>

                <div className={styles.divIdiomas}>
                    
                    <p className={styles.h4}>Español: nativo</p>
                    <p className={styles.h4}>Inglés: intermedio/avanzado</p>
                </div>
        </div>
    </div>
  )
}

export default Cv