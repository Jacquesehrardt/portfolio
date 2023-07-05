import React from "react";

import reactSvg from '../assets/img/react.svg';
import vueSvg from '../assets/img/vuejs.svg';
import phpSvg from '../assets/img/php.svg';
import postgresqlSvg from '../assets/img/postgresql.svg';

class SkillSeciton extends React.Component{
   render(){
      return(
         <section>
            <article>
               <h3>My technical skills</h3>
            </article>
            <aside>
               <figure>
                  <img src={reactSvg} alt="React logo"></img>
                  <figcaption>
                     <p>React</p>
                     <span></span>
                  </figcaption>
               </figure>
               <figure>
                  <img src={vueSvg} alt="Vue logo"></img>
                  <figcaption>
                     <p>Vue</p>
                     <span></span>
                  </figcaption>
               </figure>
               <figure>
                  <img src={phpSvg} alt="PHP logo"></img>
                  <figcaption>
                     <p>PHP</p>
                     <span></span>
                  </figcaption>
               </figure>
               <figure>
                  <img src={postgresqlSvg} alt="PostgreSQL logo"></img>
                  <figcaption>
                     <p>PostgreSQL</p>
                     <span></span>
                  </figcaption>
               </figure>
            </aside>
         </section>
      )
   }
}

export default SkillSeciton;