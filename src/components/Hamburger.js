import { useEffect } from 'react';


function Hamburger(props) {

    function isDesktop(e) {
        if(e.matches){
            document.body.classList.remove('show');
        }
    }

    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width: 670px)');
        mediaQuery.addEventListener('change', isDesktop);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);


  
    return (
        <button className="hamburger" 
                id="hamburger" 
                onClick={props.click}>
            <span className="hamburger-content">
                <span className="text"></span>
                <span className="bar"></span>
            </span>
        </button>
      )
  }
  
  
  export default Hamburger;