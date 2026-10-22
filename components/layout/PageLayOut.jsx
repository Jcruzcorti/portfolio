import React from 'react'
import Head from 'next/head'

function PageLayOut({children,title}) {


  return (

    <div>
        <Head>          
            <title>{title}</title>
            <meta name="description" content="Juan Cruz Cortiñas — Full Stack Developer. Portfolio, experiencia y proyectos." />
            <link rel="icon" href="/apertura.svg"/>
        </Head>
        <main>
            {children}
        </main>

    </div>
  )
}

export default PageLayOut;