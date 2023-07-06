import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import NavList from "./NavList";

class Header extends React.Component{
   render(){
      return(
         <header>
               
               <nav>
                  <h2>
                     <strong>&#x7b;JAC</strong>
                     /DEV&#x7d;
                  </h2>
                  <NavList />
                  <details>
                     <summary>
                        <FontAwesomeIcon icon={faBars} />
                        <FontAwesomeIcon icon={faX} />
                     </summary>
                     <NavList />
                  </details>
               </nav>
            <section>
               <h1>
                  Hello, I’m Jacques an <span>Web Developer</span>
               </h1>
               <h3>
                  These are some of my works on this journey as a web developer.
               </h3>
               <a href="#skills">
                  <FontAwesomeIcon icon={faChevronDown} />
                  Click to scroll
               </a>
            </section>
         </header>
      )
   }
}

export default Header;