import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

const interests = [
  {
    id: 0,
    title: "Practicar deportes (Entrenamiento, fútbol, padel, tenis)",
  },
  {
    id: 1,
    title: "Disfrutar del tiempo con la familia y amigos",
  },
  {
    id: 2,
    title: "Ver fútbol/series/películas, jugar videojuegos",
  },
];

function Sobremi() {

  return (
    <div className={styles.divSobremi} id={'Sobremi'}>
        <div className={styles.divSobremi2}>
            <h2 className={styles.h2}>PRESENTACIÓN</h2>
            <p className={styles.h4new}> Nací el 14/03/1996 en Córdoba, Argentina. Después de trabajar en otros rubros, me pasé al desarrollo de software en 2022. Desde marzo de 2024 trabajo de forma remota como Full Stack Developer para una empresa de EE.UU., con más interés en UI, layout y estilos, y también colaboro en backend, pagos y apps nativas iOS/Android. Sigo capacitándome y llevando features a producción para crecer técnicamente.</p>
        </div>
        <div className={styles.divIntereses}>
            <div className={styles.divInteresesItems}>
                <h2 className={styles.h2}>INTERESES</h2>
                {interests.map((interest) => (
                  <p className={styles.h5} key={interest.id}>
                    <Image src='/mate.png' alt='img mate' priority={true} sizes="100vw" width={20} height={20} className={styles.imgMate}/>
                    {interest.title}
                  </p>
                ))}
            </div>
                        

        </div>
    </div>
  )
}

export default Sobremi;