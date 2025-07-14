import React from 'react'
const NewsCard = ({noticia}) => {
    const {title,description,url,source} = noticia;
    const logo = source?.name || "NBA"
  return (
    <div className='Cards'>
      <h3>{title}</h3>
      <p>
        {description}
        <br/>
        Fuente:{logo}
    </p>
        <a href={url}
        target='_blank'
        rel='noopener noreferrer'
        >
        Leer mas 
        {/* <img src="\public\icons\cursor-pointer-svgrepo-com.svg" alt="icono de mano" className='icono-mano' /> */}
        </a>
    </div>
  )
}

export default NewsCard
