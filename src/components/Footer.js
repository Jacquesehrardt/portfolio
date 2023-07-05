import React from "react";

import resume from '../assets/documents/jacques_ehrardt_resume.pdf'

class Footer extends React.Component{
   render(){
      return(
         <footer>
            <article>
               <h2>
                  Thank’s for reading
               </h2>
               <p>
                  I'm looking for a professional opportunity to start as a developer
               </p>
            </article>
            <section>
               <a href={resume} target="_blank" rel="noreferrer" download={"jacques_ehrardt_resume.pdf"}>Download Resume</a>
               <a href="mailto:ehrardt38@gmail.com">Send a Email</a>
            </section>
         </footer>
      )
   }
}

export default Footer;