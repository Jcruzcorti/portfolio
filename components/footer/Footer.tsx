import Image from 'next/image'
import styles from '../../styles/Home.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
            <a href="https://www.instagram.com/juancortinas/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer">
              <p className={styles.pFooter}>@juancortinas</p>
                <Image src="/instagram.png" alt="Vercel Logo" width={72} height={16} className={styles.footerImgs}/>
            </a>

            <a href="mailto:jcruzcorti@gmail.com">
              <p className={styles.pFooter}>jcruzcorti@gmail.com</p>
                <Image src="/mail.png" alt="Vercel Logo" width={72} height={16} className={styles.footerImgs}/>
            </a>
            
            <a href="https://github.com/Jcruzcorti"
              target="_blank"
              rel="noopener noreferrer">
              <p className={styles.pFooter}>jcruzcorti</p>
                <Image src="/github.png" alt="Vercel Logo" priority={true} sizes="100vw" width={72} height={16} className={styles.footerImgs}/>
            </a>
            <a href="https://www.linkedin.com/in/juancruzcortinas/"
              target="_blank"
              rel="noopener noreferrer">
              <p className={styles.pFooter}>juan cruz</p>
                <Image src="/linkedin.png" alt="Vercel Logo" width={72} height={16} className={styles.footerImgs}/>
            </a>
          
        </footer>
  )
}

export default Footer