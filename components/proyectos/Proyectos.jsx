import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


function Proyectos({title}) {


  return (
    <div className={styles.divProyectos}>
       <div  className={styles.divCard1}>
            <h4 className={styles.h4}> {title}</h4>
            <div>
                <p className={styles.pFooter}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem labore error. Sint, sunt ratione distinctio tempora nisi iste quidem autem recusandae iure quo culpa ab, neque voluptates? Ipsum, soluta.</p>
                <p className={styles.pFooter}>Ver</p>
            </div>
       </div>
       {/* <div  className={styles.divCard1}>
            <h2 className={styles.h2}> {title}</h2>
       </div> */}
    </div>
  )
}

export default Proyectos;