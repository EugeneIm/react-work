import React from 'react';
import {useEffect } from 'react';

const data = require('../headlines.json')

function Article() {
  useEffect (() => {
    console.log(data)
    console.log(data.articles)
  },[])

  return(
      <section className="news-page">
        {data.articles.slice(1, 13).map(firstArticle =>
          (
          <article className="news" >
          <figure>
          <img src={firstArticle.urlToImage}/>
          </figure>
          <h2>{firstArticle.title}</h2>
          <p>{firstArticle.description}</p>
          <p><a href="/">Read More</a></p>
          </article>
          ))}
      </section>
    )
}

export default Article;