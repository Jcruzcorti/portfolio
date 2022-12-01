import React from 'react'
import styles from '../../styles/Home.module.css'
import Proyectos from '../proyectos/Proyectos'


function Portfolio() {


  return (
    <div className={styles.divPortfolio} id={'Portfolio'}>
        <h2 className={styles.h2}>Proyectos</h2>
        <div className={styles.divProyectos}>
          <Proyectos title='Harry Potter Quiz'/>
          <Proyectos title='Harry Potter Quiz'/>
          <Proyectos title='Harry Potter Quiz'/>
          <Proyectos title='Harry Potter Quiz'/>
          <Proyectos title='Harry Potter Quiz'/>
            
        </div>
    </div>
  )
}

export default Portfolio;