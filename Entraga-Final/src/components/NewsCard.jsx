import React from 'react'
import { capitalize } from "../utils/capitalize";

const NewsCard = ({noticia}) => {
    const {title,description,url,source} = noticia;
    const logo = source?.name || "NBA"
  return (
    <div className='Cards'>
      <h3>{capitalize(title)}</h3>
      <p>
        {capitalize(description)}
        <br/>
        Fuente: {capitalize(logo)}
    </p>
        <a href={url}
        target='_blank'
        rel='noopener noreferrer'
        >
        Leer más
        </a>
    </div>
  )
}

export default NewsCard
