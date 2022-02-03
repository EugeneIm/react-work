import React from 'react';
import {useEffect, useState} from 'react';


const data = require('../headlines.json')

function Hero(){

  const [hero, setHero] = useState();
  useEffect(() => 
    setHero(data.articles[0]))

  return(
    <div className="hero-total">
    <div className="hero-article">
      <img className = "hero-image" src = {hero?.urlToImage}/>
    </div>
    <div className="hero-desc">
      <p>{hero?.title}</p>
      <p>{hero?.description}</p>
    </div>
    </div>
    )
}

export default Hero;
