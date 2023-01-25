import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/Home.module.css'
import Swal from 'sweetalert2'



function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      if ( contact.name === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Por favor, ingrese todos los datos del formulario'
          })
    }

    else if (contact.email === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Por favor, ingrese todos los datos del formulario'
          })
    }
    else if (contact.mensaje === "") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Por favor, ingrese todos los datos del formulario'
          })
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Mensaje enviado'
          })

          emailjs.sendForm('service_q4h5kuc', 'template_px4j7b8', form.current, 'qz1-4pKUlGcUfd2CX')
    
          e.target.reset()
          
          setTimeout(() => {
            window.location.href="/";
          }, 3000); 
    }
    

    };
  

    const [contact,setContact]=useState({
        name: "",
        email: "",
        mensaje: ""
    })

    function handleChange(e) {
        const field = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [field]:value,
    
        })
        
    } 



  return (
    <div className={styles.divContacto} id={'Contacto'}>
        <h2 className={styles.h2}>CONTACTO</h2>
        <form action="" className={styles.divForm} ref={form} onSubmit={sendEmail}>
            <div className={styles.divContactoForm}>
                <label htmlFor="" className={styles.label}><p className={styles.pContact}>Nombre completo</p></label>
                <input onChange={handleChange} type="text" name='name' placeholder='Escriba su nombre completo aquí' className={styles.input} aria-required/>
            </div>
            <div className={styles.divContactoForm}>
                <label htmlFor="" className={styles.label}><p className={styles.pContact}>Mail</p></label>
                <input onChange={handleChange} type="email" name='email' placeholder='Escriba su mail aquí' className={styles.input} aria-required/>
            </div>
            <div className={styles.divContactoForm}>
                <label htmlFor="" className={styles.label}><p className={styles.pContact}>Mensaje</p></label>
                <textarea onChange={handleChange} type="text" name='mensaje' placeholder='Escriba su mensaje aquí' className={styles.input} cols="30" rows="10" aria-required/>
            </div>
            <div className={styles.divButtonContacto}>
                <button 
                    className={styles.buttonContacto}>ENVIAR
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default Contacto;