import React from 'react'
import styles from '../../styles/Home.module.css'


function Contacto() {

  return (
    <div className={styles.divContacto} id={'Contacto'}>
        <h2 className={styles.h2}>Contacto</h2>
        <form action="">
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" name='name' placeholder='Escriba su nombre completo aquí'/>
            </div>
            <div>
                <label htmlFor="">Mail</label>
                <input type="email" name='email' placeholder='Escriba su mail aquí'/>
            </div>
            <div>
                <label htmlFor="">Mensaje</label>
                <textarea type="text" name='mensaje' placeholder='Escriba nombre completo aquí' cols="50" rows="10"/>
            </div>
            
        </form>
    </div>
  )
}

export default Contacto;