import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import ButtonHover from '../buttons/ButtonHover'


function NavBar() {

  return (
    <div className={styles.divLinks}>
      <Link href='#Cv' scroll={false}><ButtonHover tittle="CV"/></Link>
      <Link href='#Portfolio' scroll={false}><ButtonHover tittle="PORTFOLIO"/></Link>
      <Link href='#Sobremi' scroll={false}><ButtonHover tittle="SOBRE MI"/></Link>
      <Link href='#Contacto' scroll={false}><ButtonHover tittle="CONTACTO"/></Link>
      {/* <Link href='#Contacto' scroll={false}><Image src='/contacto.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/></Link> */}
    </div>
  )
}

export default NavBar