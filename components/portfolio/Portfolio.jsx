import React from 'react'
import styles from '../../styles/Home.module.css'
import Proyectos from '../proyectos/Proyectos'
import img1 from '../../public/hp2.png'
import img2 from '../../public/newportfolio.png'
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
        <h2 className={styles.h2}>PROYECTOS</h2>
        <div className={styles.divProyectos}>
          <Link href={'https://portfoliojcc.vercel.app/'} target='_blank'><Proyectos title='Portfolio' img={img2} priority={false} description='Desarrollo y re-versión de Curriculum, transformándo el sitio web anterior en una app más potente con tecnologías avanzadas como JavaScript, React.js y Next.js'/></Link>            
          <Link href={'https://harrypotterquizgame.vercel.app/'} target='_blank'><Proyectos title='Harry Potter Quiz' img={img1} description='Quiz app con temática Harry Potter utilizando tencologías como JavaScript, React js, Next js y Firebase con el fin de guardar puntuación y nombre del participante  '/></Link>
          <Link href={'https://scalonets.netlify.app/'} target='_blank'><Proyectos title='Scaloneta Quiz' img={img3} description='Quiz app sobre Selección Argentina utilizando tencologías como JavaScript, React js y Firebase con la finalidad de almacenar nombre y puntuación del participante'/></Link>
        </div>
        <div className={styles.divProyectos}>
          <Link href={'https://mmchocolates.netlify.app/'} target='_blank'><Proyectos title='MM Chocolates app' img={img5} description='Creamos reversión de sitio web Mm Chocolates, transformándo el mismo en un e-commerce con tecnologías como JavaScript, React.js y Firebase almacenando la orden de compra hecha'/></Link>
          <Link href={'https://thenikestore.netlify.app/'} target='_blank'><Proyectos title='Nike Store' img={img4} description='Desarrollo de e-commerce Nike app con tecnologías avanzadas como JavaScript, React.js, Adobe Photoshop y Firebase con el fin de guardar la orden de compra realizada por el usuario'/></Link>
          <Link href={'https://jcruzcorti.github.io/MMchocolates/'} target='_blank'><Proyectos title='MM Chocolates sitio web' img={img6} description='Desarrollo y maquetación de sitio web de emprendimiento de chocolates, con tecnologías básicas como HTML, CSS, Bootstrap y JavaScript consumiendo API Email.js para enviar pedido'/></Link>
        </div>
        <div className={styles.divProyectos}>
          <Link href={'https://jcruzcorti.github.io/JH/'} target='_blank'><Proyectos title='Jugadores Históricos' img={img7} description='Proyecto de Blog futbolero sobre una selección de jugadores de fútbol favoritos históricos, actuales y futuros, desarrollado y maquetado con tecnologías básicas como HTML, CSS'/></Link>
          <Link href={'https://jcruzcorti.github.io/CV/'} target='_blank'><Proyectos title='Curriculum Vitae' img={img8} description='Proyecto similar al portfolio actual, sitio web sobre CV con información personal y logros, pero desarrollado y maquetado con tecnologías básicas como HTML, CSS y Bootstrap'/> </Link>
        </div>
    </div>
  )
}

export default Portfolio;