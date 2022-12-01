import React from 'react'
import styles from '../../styles/Home.module.css'
import Proyectos from '../proyectos/Proyectos'
import img1 from '../../public/hp2.png'
import img2 from '../../public/portfolio.png'
import img3 from '../../public/scaloneta.png'
import img4 from '../../public/nike.png'
import img5 from '../../public/mmchocolates.png'
import img6 from '../../public/mmchocolates.png'
import img7 from '../../public/jh.png'
import img8 from '../../public/cvviejo.png'
import Link from 'next/link'


function Portfolio() {


  return (
    <div className={styles.divPortfolio} id={'Portfolio'}>
        <h2 className={styles.h2}>Proyectos</h2>
        <div className={styles.divProyectos}>
          <Link href={''} target='_blank'><Proyectos title='Portfolio' img={img2} priority={false} description='Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js'/></Link>            
          <Link href={'https://harrypotterquizgame.vercel.app/'} target='_blank'><Proyectos title='Harry Potter Quiz' img={img1} description='Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js'/></Link>
          <Link href={'https://scalonets.netlify.app/'} target='_blank'><Proyectos title='Scaloneta Quiz' img={img3} description='Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js'/></Link>
        </div>
        <div className={styles.divProyectos}>
          <Link href={'https://mmchocolates.netlify.app/'} target='_blank'><Proyectos title='MM Chocolates app' img={img5} description='Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js'/></Link>
          <Link href={'https://thenikestore.netlify.app/'} target='_blank'><Proyectos title='Nike Store' img={img4} description='Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js'/></Link>
          <Link href={'https://jcruzcorti.github.io/MMchocolates/'} target='_blank'><Proyectos title='MM Chocolates sitio web' img={img6} description='Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js'/></Link>
        </div>
        <div className={styles.divProyectos}>
          <Link href={'https://jcruzcorti.github.io/JH/'} target='_blank'><Proyectos title='Jugadores Históricos' img={img7} description='Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js'/></Link>
          <Link href={'https://jcruzcorti.github.io/CV/'} target='_blank'><Proyectos title='Curriculum Vitae' img={img8} description='Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js Desarrollo y maquetado de este mismo portfolio, con tecnologías como Next js'/> </Link>
        </div>
    </div>
  )
}

export default Portfolio;