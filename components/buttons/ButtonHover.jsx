import React from 'react'
import styles from '../../styles/Home.module.css'

function ButtonHover({tittle}) {


  return (
    <>
        <button className={styles.ButtonHoverPrimary}>
            {tittle}
        </button>
    </>
  )
}

export default ButtonHover