import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from "next/image";
import Link from 'next/link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function Cv() {


  return (
    <div className={styles.divCv} id={'Cv'}>

        <div className={styles.divCvIzquierda}>

            <h3 className={styles.h3}>FORMACIÓN ACADÉMICA</h3>
            <div className={styles.divFormación}>
                <p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Bachiller orientado en economía y gestión de las organizaciones en Instituto Juan Zorrilla de San Martín 2008-2013</p>
                <p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Licenciatura en Psicología en Facultad de Psicología UNC. 2015 - Actualidad</p>
                <Link href={'https://jcruzcorti.github.io/CV/img/certificadocoder-copia.png'}  target='_blank'><p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Curso de Desarrollo web en Coderhouse-Ver certificación</p></Link>
                <Link href={'https://jcruzcorti.github.io/CV/img/js.png'}  target='_blank'><p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Curso de Javascript en Coderhouse-Ver certificación</p></Link>
                <Link href={'https://jcruzcorti.github.io/CV/img/reactjs.png'}  target='_blank'><p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Curso de React Js en Coderhouse-Ver certificación</p></Link>

            </div>
            
            <h3 className={styles.h3}>APTITUDES</h3>
            <div className={styles.divAptitudes}>
                <p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Resolución de problemas, buena comunicación, adaptabilidad, organización/orden</p>
                <p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Esfuerzo, constancia, positividad</p>
                <p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Proactividad, autodidacta, empatía, autonomía</p>
            </div>
        </div>
    
        <div className={styles.divCvDerecha}>
            <h3 className={styles.h3} >CONOCIMIENTOS</h3>

            <div className={styles.divConocimientos}>
                
                <Image src='/apertura.svg' alt='img apertura' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/html.svg' alt='img html' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/css.svg' alt='img css'  width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/js.svg' alt='img js' width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/react.png' alt='img react'  width={50} height={50} className={styles.fotoConocimiento}/>
                <Image src='/clausura.svg' alt='img clausura'  width={50} height={50} className={styles.fotoConocimiento}/>
                <div className={styles.divSub}>
                    <div className={styles.divSub1}>
                        <p className={styles.h4}>HTML - CSS</p>
                        <p className={styles.h4}>JavaScript</p>
                        <p className={styles.h4}>React.js</p>
                        <p className={styles.h4}>GIT</p>
                        <p className={styles.h4}>Github</p>
                        <p className={styles.h4}>TypeScript</p>
                    </div>
                    <div className={styles.divSub2}>
                        <p className={styles.h4}>Next.js</p>
                        <p className={styles.h4}>Node.js</p>
                        <p className={styles.h4}>Express</p>
                        <p className={styles.h4}>Firebase</p>
                        <p className={styles.h4}>Material UI</p>
                        <p className={styles.h4}>Tailwind</p>
                    </div>
                </div>
            </div>

                <h3 className={styles.h3}>IDIOMAS</h3>

                <div className={styles.divIdiomas}>
                    
                    <p className={styles.h4}>Español: Nativo</p>
                    <p className={styles.h4}>Inglés: Intermedio/avanzado</p>
                </div>
        </div>
    </div>
  )
}

export default Cv