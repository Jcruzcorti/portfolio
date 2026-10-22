import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from "next/image";
import Link from 'next/link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Experience data
const experience = [
  {
    id: 0,
    tittle: "Full Stack Developer — RotoGPT (Reefinery, Inc.). Remoto (EE.UU.). mar. 2024 – actualidad",
  },
  {
    id: 1,
    tittle: "Desarrollador Front-end — Freelance. Córdoba, Argentina. may. 2022 – feb. 2024",
  },
];

// Academic Background data
const academicBackground = [
  {
    id: 0,
    tittle: "Bachiller orientado en economía y gestión de las organizaciones en Instituto Juan Zorrilla de San Martín 2008-2013",
  },
  {
    id: 1,
    tittle: "Curso de Desarrollo web - Ver certificación",
    href: "https://jcruzcorti.github.io/CV/img/certificadocoder-copia.png",
  },
  {
    id: 2,
    tittle: "Curso de Javascript - Ver certificación",
    href: "https://jcruzcorti.github.io/CV/img/js.png",
  },
  {
    id: 3,
    tittle: "Curso de React Js - Ver certificación",
    href: "https://jcruzcorti.github.io/CV/img/reactjs.png",
  },
  {
    id: 4,
    tittle: "React.js Intermedio y Avanzado en OpenBootcamp · 2023",
  },
  {
    id: 5,
    tittle: "Curso de Excel - Ver certificación",
    href: "https://udemy-certificate.s3.amazonaws.com/image/UC-3c5aca55-33f2-4b1f-966f-17f4ad4ba5d0.jpg",
  },
];

// Aptitudes data
const aptitudes = [
  {
    id: 0,
    tittle: "Resolución de problemas, buena comunicación, adaptabilidad, organización/orden",
  },
  {
    id: 1,
    tittle: "Esfuerzo, constancia, positividad",
  },
  {
    id: 2,
    tittle: "Proactividad, autodidacta, empatía, autonomía",
  },
];

// Technologies images data
const technologiesImages = [
  { id: 0, src: "/apertura.svg", alt: "img apertura" },
  { id: 1, src: "/html.svg", alt: "img html" },
  { id: 2, src: "/css.svg", alt: "img css" },
  { id: 3, src: "/js.svg", alt: "img js" },
  { id: 4, src: "/react.png", alt: "img react" },
  { id: 5, src: "/clausura.svg", alt: "img clausura" },
];

// Knowledges data
const knowledgesPrimary = ["HTML - CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Material UI", "Tailwind"];
const knowledgesSecondary = ["Node.js", "NestJS", "MongoDB", "Capacitor", "Auth0 / Stripe", "Firebase / GCP", "Github"];

function CvItem({ tittle, href }) {
  const content = (
    <p className={styles.h4}>
      <ArrowDropDownIcon className={styles.arrowDropDownIcon} />
      {tittle}
    </p>
  );

  if (href) {
    return (
      <Link href={href} target="_blank">
        {content}
      </Link>
    );
  }

  return content;
}

function Cv() {


  return (
    <div className={styles.divCv} id={'Cv'}>

        <div className={styles.divCvIzquierda}>

            <h3 className={styles.h3}>EXPERIENCIA</h3>
            <div className={styles.divFormación}>
                {experience.map((item) => (
                  <CvItem key={item.id} tittle={item.tittle} />
                ))}
            </div>

            <h3 className={styles.h3}>FORMACIÓN ACADÉMICA</h3>
            <div className={styles.divFormación}>
                {/* <p className={styles.h4}><ArrowDropDownIcon className={styles.arrowDropDownIcon}/>Licenciatura en Psicología en Facultad de Psicología UNC. 2015 - Actualidad</p> */}
                {academicBackground.map((item) => (
                  <CvItem key={item.id} tittle={item.tittle} href={item.href} />
                ))}
            </div>
            
            <h3 className={styles.h3}>APTITUDES</h3>
            <div className={styles.divAptitudes}>
                {aptitudes.map((item) => (
                  <CvItem key={item.id} tittle={item.tittle} />
                ))}
            </div>
        </div>
    
        <div className={styles.divCvDerecha}>
            <h3 className={styles.h3} >CONOCIMIENTOS</h3>

            <div className={styles.divConocimientos}>
                
                {technologiesImages.map((technology) => (
                  <Image key={technology.id} src={technology.src} alt={technology.alt} width={50} height={50} className={styles.fotoConocimiento}/>
                ))}
                <div className={styles.divSub}>
                    <div className={styles.divSub1}>
                        {knowledgesPrimary.map((knowledge) => (
                          <p className={styles.h4} key={knowledge}>{knowledge}</p>
                        ))}
                    </div>
                    <div className={styles.divSub2}>
                        {knowledgesSecondary.map((knowledge) => (
                          <p className={styles.h4} key={knowledge}>{knowledge}</p>
                        ))}
                    </div>
                </div>
            </div>

                <h3 className={styles.h3}>IDIOMAS</h3>

                <div className={styles.divIdiomas}>
                    
                    <p className={styles.h4}>Español: Nativo</p>
                    <p className={styles.h4}>Inglés: Profesional</p>
                </div>
        </div>
    </div>
  )
}

export default Cv
