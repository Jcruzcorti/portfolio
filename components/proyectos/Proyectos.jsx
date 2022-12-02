import React from 'react'
import Image from "next/image";
import styles from '../../styles/Home.module.css'


function Proyectos({title,description,img}) {


  return (
    <div className={styles.divProyectos}>
       <div  className={styles.divCard1}>
            <h3 className={styles.h3Card}> {title}</h3>
            <div className={styles.divImgCard}>
                <Image src={img} alt='img proyectos' priority={true} sizes="100vw" width={310} height={180} className={styles.imgCard}/>
            </div>
            <div className={styles.divInfoCard}>
                <p className={styles.pCard}>{description}</p>
            </div>
       </div>
    </div>
  )
}

export default Proyectos;