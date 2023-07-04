import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';


class ProjectsSection extends React.Component{
   ProjectCard(props) {
      return (
         <Card>
            <Card.Img src={props.imgSrc} />
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>
                  {props.text}
               </Card.Text>
               <a target="_blank" rel="noreferrer" href={props.btnHref}>
                  <FontAwesomeIcon icon={faChevronUp} />
                  <p>Open Github</p>
               </a>
            </Card.Body>
         </Card>
      );
   }

   render(){
      return(
         <section className="portfolio" id="portfolio">
            <article>
              <h3>Portfolio</h3>
              <h4>Check out my projects!</h4>
            </article>
         </section>
      )
   }
}

export default ProjectsSection;