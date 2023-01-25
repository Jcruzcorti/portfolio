import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Image from "next/image";



function NavBar() {

  return (
    <div className={styles.divLinks}>
      <Link href='#Cv' scroll={false}><Image src='/imgcv.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/></Link>
      <Link href='#Portfolio' scroll={false}><Image src='/imgportfolio.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/></Link>
      <Link href='#Sobremi' scroll={false}><Image src='/imgsobremi.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/></Link>
      <Link href='#Contacto' scroll={false}><Image src='/contacto.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/></Link>
    </div>
  )
}

export default NavBar