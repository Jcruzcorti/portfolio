import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image';


function Sobremi() {

  return (
    <div className={styles.divSobremi} id={'Sobremi'}>
        <div className={styles.divSobremi2}>
            <h2 className={styles.h2}>Presentación</h2>
            <p className={styles.h4new}> Soy de nacionalidad Argentina, más precisamente de Córdoba Capital, tengo 26 años y nací el 14/03/1996. Curso la carrera de Licenciatura en Psicología en la Universidad Nacional de Córdoba, y luego de haber realizado distintas tareas laborales tanto en lugares como un emprendimiento de chocolatería, una verdulería, un club deportivo y un emprendimiento de pastelería, comencé a interesarme por este mundo totalmente nuevo para mí, como es el de la programación. A partir de este punto, siempre quise progresar e interiorizarme en ésta profesión, capacitándome y aprendiendo cada vez más para lograr desarrollar constantemente mis habilidades técnicas en este rubro.</p>
        </div>
        <div className={styles.divIntereses}>
            <div className={styles.divInteresesItems}>
                <h2 className={styles.h2}>Intereses</h2>
                <p className={styles.h4}><Image src='/mate.png' alt='img mate' priority={true} sizes="100vw" width={20} height={20} className={styles.imgMate}/>Practicar deportes (Entrenamiento, fútbol, padel, tenis)</p>
                <p className={styles.h4}><Image src='/mate.png' alt='img mate' priority={true} sizes="100vw" width={20} height={20} className={styles.imgMate}/>Disfrutar del tiempo con la familia y amigos</p>
                <p className={styles.h4}><Image src='/mate.png' alt='img mate' priority={true} sizes="100vw" width={20} height={20} className={styles.imgMate}/>Ver fútbol/series/películas, jugar videojuegos</p>
            </div>
                        

        </div>
    </div>
  )
}

export default Sobremi;