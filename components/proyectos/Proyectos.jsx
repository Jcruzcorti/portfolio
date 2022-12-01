import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


function Proyectos({title,description,img}) {


  return (
    <div className={styles.divProyectos}>
       <div  className={styles.divCard1}>
            <h3 className={styles.h3Card}> {title}</h3>
            <div className={styles.divImgCard}>
                <Image src={img} alt='img change mode' layout='responsive' priority={true} width={100} height={100} className={styles.imgCard}/>
            </div>
            <div className={styles.divInfoCard}>
                <p className={styles.pFooter}>{description}</p>
            </div>
       </div>
    </div>
  )
}

export default Proyectos;