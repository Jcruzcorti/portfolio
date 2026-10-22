import React from 'react'
import styles from '../../styles/Home.module.css'
import Proyectos from '../proyectos/Proyectos'
import { Grid } from '@mui/material'
import {proyects} from '../mock/Proyects'


function Portfolio() {


  return (
    <div className={styles.divPortfolio} id={'Portfolio'}>
        <h2 className={styles.h2}>PROYECTOS</h2>

        {/* Center the grid on the page; keep last incomplete row left-aligned */}
        <div className={styles.divPortfolioGrid}>
          <div className={styles.divPortfolioGridInner}>
            <Grid container spacing={0} justifyContent='flex-start' alignItems='stretch' gap={5} my={1}>
     
              {proyects.map((proyect)=>(
                  <Proyectos key={proyect.id} item={proyect}/>
              ))}
            </Grid>
          </div>
        </div>
    </div>
  )
}

export default Portfolio;