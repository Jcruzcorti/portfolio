import React from 'react'
import styles from '../../styles/Home.module.css'


function Contacto() {


    function sendInformation(e) {
        e.preventDefault()
    }

  return (
    <div className={styles.divContacto} id={'Contacto'}>
        <h2 className={styles.h2}>Contacto</h2>
        <form action="" className={styles.divForm}>
            <div className={styles.divContactoForm}>
                <label htmlFor="" className={styles.label}><p className={styles.pContact}>Nombre completo</p></label>
                <input type="text" name='name' placeholder='Escriba su nombre completo aquí' className={styles.input}/>
            </div>
            <div className={styles.divContactoForm}>
                <label htmlFor="" className={styles.label}><p className={styles.pContact}>Mail</p></label>
                <input type="email" name='email' placeholder='Escriba su mail aquí' className={styles.input}/>
            </div>
            <div className={styles.divContactoForm}>
                <label htmlFor="" className={styles.label}><p className={styles.pContact}>Mensaje</p></label>
                <textarea type="text" name='mensaje' placeholder='Escriba su mensaje aquí' className={styles.input} cols="50" rows="10"/>
            </div>
            <div className={styles.divButtonContacto}>
                <button 
                onClick={sendInformation}
                className={styles.buttonContacto}>ENVIAR</button>
            </div>
            
        </form>
    </div>
  )
}

export default Contacto;