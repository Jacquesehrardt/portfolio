import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component{
   render(){
      return(
         <header>
            <section>
               <h1>
                  <span>&#x7b;JAC</span>
                  /DEV&#x7d;
               </h1>
            </section>
            <nav>
               <details>
                  <summary>
                     <FontAwesomeIcon icon={faBars} />
                  </summary>
                  <summary>
                     <FontAwesomeIcon icon={faX} />
                  </summary>
               </details>
            </nav>
         </header>
      )
   }
}

export default Header;