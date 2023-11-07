import React from 'react'
import styles from '../../styles/Home.module.css'
import Proyectos from '../proyectos/Proyectos'
import { Grid } from '@mui/material'
import {proyects} from '../mock/Proyects'


function Portfolio() {


  return (
    <div className={styles.divPortfolio} id={'Portfolio'}>
        <h2 className={styles.h2}>PROYECTOS</h2>

        <Grid container spacing={0} justifyContent='flex-start' gap={5} my={1}>
     
          {proyects.map((proyect)=>(
              <Proyectos key={proyect.id} item={proyect}/>
          ))}
        </Grid>
    </div>
  )
}

export default Portfolio;