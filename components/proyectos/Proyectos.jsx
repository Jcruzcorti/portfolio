import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';



function Proyectos({item}) {


  return (
    <>
      <Link href={item.url} target='_blank'>
        <Card sx={{maxWidth: 400, my: 3, }} elevation={8}>    
            <CardMedia
              
              sx={{ height: 220,}}
              image={item.img}
              alt="proyectos"
              
          />  
          <CardContent sx={{ '&:last-child': { pb: 3, pt: 3, backgroundColor: "#eae8df" }}}>
            <Typography gutterBottom variant="h6" component="div">
                {item.tittle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}

export default Proyectos;