import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';



function Proyectos({item}) {


  return (
    <>
      <Link href={item.url} target='_blank' style={{ textDecoration: 'none', display: 'flex', height: '100%' }}>
        <Card sx={{ maxWidth: 400, width: '100%', my: 3, height: '100%', display: 'flex', flexDirection: 'column' }} elevation={8}>    
            <CardMedia
              
              sx={{ height: 220, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#000' }}
              image={item.img}
              alt="proyectos"
              
          />  
          <CardContent sx={{ flexGrow: 1, '&:last-child': { pb: 3, pt: 3, backgroundColor: "#eae8df" }}}>
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