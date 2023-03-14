import React from 'react'
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
// import ImgModal from './ImgModal';



function Proyectos({item}) {


  return (
    // <div className={styles.divProyectos}>
    //    <div  className={styles.divCard1}>
    //         <h3 className={styles.h3Card}> {title}</h3>
    //         <div className={styles.divImgCard}>
    //             <Image src={img} alt='img proyectos' priority={true} sizes="100vw" width={310} height={180} className={styles.imgCard}/>
    //         </div>
    //         <div className={styles.divInfoCard}>
    //             <p className={styles.pCard}>{description}</p>
    //         </div>
    //    </div>
    // </div>
    <>
      <Link href={item.url} target='_blank'>
        <Card sx={{maxWidth: 400, my: 3, }} elevation={8}>    
            <CardMedia
              component="img"
              sx={{ height: 220, objectFit:'cover',}}
              image={item.img}
              alt="proyectos"
              objectFit= "cover"
          />  
          <CardContent sx={{ '&:last-child': { pb: 3, pt: 3, backgroundColor: "#eae8df" }}}>
            <Typography gutterBottom variant="h5" component="div">
                {item.tittle}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.description}
              </Typography>

            {/* <ImgModal img1={item.img} img2={item.img2} img3={item.img3}/> */}
          </CardContent>
        </Card>
      </Link>
    </>
  )
}

export default Proyectos;