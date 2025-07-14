import React from 'react'
import NewsCard from './NewsCard'

const NewsList = ({noticias}) => {
  return (
    <div>
        <ul className='news-list'>
          {noticias.map((noticia) => (
            //lo envuelvo en un li por que sino no se renderiza al cambiar de seccion 
            <li key = {noticia.url}>
            <NewsCard noticia={noticia}/>
            </li>
      ))}
        </ul>
    </div>
  );
}

export default NewsList
