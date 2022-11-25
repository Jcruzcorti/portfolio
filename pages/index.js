import { useState } from 'react'
import Image from 'next/image'
import PageLayOut from '../components/layout/PageLayOut'
import styles from '../styles/Home.module.css'

export default function Home() {

const [colorTheme, setColorTheme] = useState(true)

function changeBackgroundColor() {
  colorTheme ? setColorTheme(false) : setColorTheme(true)
}

  return (
    
    <PageLayOut title="Portfolio JC">
      <div className={colorTheme ? styles.container : styles.container2}>

        <div className={styles.divButton}>
          <button 
          onClick={changeBackgroundColor} 
          className={colorTheme ? styles.principalColor : styles.secondaryColor}>
            <Image src="/mode.png" alt='img change mode' width={40} height={40} className={styles.ColorTheme}/>
          </button>
        </div>


        <main className={styles.main}>
          
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </PageLayOut>

  )
}
