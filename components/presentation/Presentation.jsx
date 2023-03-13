import React,{useEffect} from 'react'
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import NavBar from '../navbar/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Presentation() {

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 400,
    });
  });



  return (

  <div className={styles.DivPrimaryPresentation} data-aos="zoom-in">
    <div className={styles.divPresentation}>
      <div className={styles.divStart}>
          <h2 className={styles.h2}>Hola! Soy Juan Cruz Cortiñas</h2>
          <h3 className={styles.h3}>Front-end Developer</h3>
          
        </div>
        <div className={styles.divStart2}>
          <Image src='/fotocv.png' alt='img cv' priority={true} width={220} height={200} className={styles.fotoCv}/> 
        </div>
        
    </div> 
    <NavBar/>
  </div>
  )
}

export default Presentation;