import React from 'react'
import ArticlePage from './ArticlePage'
import Hero from './Hero'
import Nav from './Nav'
import Footer from '../components/Footer';

function Wrapper() {
	return (
		<article className="total-wrapper">
      <Nav/>
      <Hero/>
      <ArticlePage/>
      <Footer/>
		</article>
	)
}


//Wrapper - max-width of 900px and centered horizontally when displayed on screens larger than 900px, i.e. desktop monitor. 
//Hero Article:
  //Wrapped in an article tag
  //Contain a figure tag that displays the news article image. 
  //Figure is to be on the left side of the component
  //Right side should have an h2 tag that displays the title.
  //Right side should also have an <a> tag that links to the source of the article. 

//Hero article: This is the first article from the API. The "Hero" article 
//Regular Articles: Reduce the remaining articles to a maximum of 12, except the hero article. 

//Article Titles must remove the news source at the end of the string. 
  //i.e. Warhammer 3 - Offical Chaos Trailer -IGN formats to Warhammer 3 - Offical Chaos Trailer. -IGN was removed. 

//Hint: use the [string].split() method along with a regex to remove the "-" or "|" character from the titles. 
export default Wrapper