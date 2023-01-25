import { useState } from 'react'
import Image from "next/image";
import PageLayOut from '../components/layout/PageLayOut'
import styles from '../styles/Home.module.css'
import Presentation from '../components/presentation/Presentation'
import Cv from '../components/cv/Cv'
import Link from 'next/link'
import Portfolio from '../components/portfolio/Portfolio'
import Sobremi from '../components/sobremi/Sobremi'
import Contacto from '../components/contacto/Contacto'
import ButtonTheme from '../components/buttons/ButtonTheme';
import ButtonLinkHome from '../components/buttons/ButtonLinkHome';

export default function Home() {

const [colorTheme, setColorTheme] = useState(true)

function changeBackgroundColor() {
  colorTheme ? setColorTheme(false) : setColorTheme(true)
}

  return (
    
    <PageLayOut title="Portfolio">
      <div className={colorTheme ? styles.container : styles.container2}>

        <div className={styles.divButton}>
          <ButtonTheme onClick={changeBackgroundColor}/> 
        </div>
        <div className={styles.divH1}>
        </div>

        <main className={styles.main}>        
          <Presentation/>
          <Cv/>
          <Portfolio/>
          <Sobremi/>
          <Contacto/>
        </main>

        <div className={styles.ButtonLinkHome}>
          <Link href='/'><ButtonLinkHome/></Link>   
        </div>


        <footer className={styles.footer}>
            <a href="https://www.instagram.com/juancortinas/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer">
              <p className={styles.pFooter}>@juancortinas</p>
                <Image src="/instagram.png" alt="Vercel Logo" width={72} height={16} className={styles.footerImgs}/>
            </a>

            <a href="https://outlook.live.com/mail/0/"
              target="_blank"
              rel="noopener noreferrer">
              <p className={styles.pFooter}>juancruzcor@hotmail.com</p>
                <Image src="/mail.png" alt="Vercel Logo" width={72} height={16} className={styles.footerImgs}/>
            </a>
            
            <a href="https://github.com/Jcruzcorti"
              target="_blank"
              rel="noopener noreferrer">
              <p className={styles.pFooter}>jcruzcorti</p>
                <Image src="/github.png" alt="Vercel Logo" priority={true} sizes="100vw" width={72} height={16} className={styles.footerImgs}/>
            </a>
            <a href="https://www.linkedin.com/in/juan-cruz-corti%C3%B1as/"
              target="_blank"
              rel="noopener noreferrer">
              <p className={styles.pFooter}>juan cruz</p>
                <Image src="/linkedin.png" alt="Vercel Logo" width={72} height={16} className={styles.footerImgs}/>
            </a>
          
        </footer>
      </div>
    </PageLayOut>

  )
}
