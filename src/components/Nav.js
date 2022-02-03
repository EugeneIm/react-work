import React from 'react'
import Hamburger from './Hamburger';

function Nav(){
	return (
		<div className='total-nav'>
			<nav className="navigation">
				<ul className='first-list'>
					<li><a href="/">Local</a></li>
					<li><a href="/">Canada</a></li>
					<li><a href="/">Indigenous</a></li>
					<li><a href="/">World</a></li>
					<li><a href="/">Opinion</a></li>
				</ul>
				<ul className='second-list'>
					<li><a href="/">Business</a></li>
					<li><a href="/">Entertainment</a></li>
					<li><a href="/">Health</a></li>
					<li><a href="/">Science</a></li>
					<li><a href="/">Sport</a></li>
				</ul>
			</nav>
		<Hamburger/>
		</div>
	)
}

//Navigation: 
  //10 nav items: Local, Canada, Indigenous, World, Opinion are the primary 5, secondary 5 are Business, Entertainment, Health, Science, Sports. 
	//Button to open and close the navigation. 
	//At mobile view, no links and only the button for a drop down 
	//Screen below the size of 850px, all 10 are hidden until the user clicks the menu button. 

export default Nav