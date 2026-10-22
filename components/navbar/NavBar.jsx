import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import ButtonHover from '../buttons/ButtonHover'


const navItems = [
  { id: 0, href: "#Cv", tittle: "CV" },
  { id: 1, href: "#Portfolio", tittle: "PORTFOLIO" },
  { id: 2, href: "#Sobremi", tittle: "SOBRE MI" },
  { id: 3, href: "#Contacto", tittle: "CONTACTO" },
];

function NavBar() {

  return (
    <div className={styles.divLinks}>
      {navItems.map((item) => (
        <Link key={item.id} href={item.href} scroll={false}><ButtonHover tittle={item.tittle}/></Link>
      ))}
      {/* <Link href='#Contacto' scroll={false}><Image src='/contacto.png' alt='img cv' priority={true} width={180} height={180} className={styles.fotoLink}/></Link> */}
    </div>
  )
}

export default NavBar