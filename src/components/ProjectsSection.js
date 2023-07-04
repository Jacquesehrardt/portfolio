import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

import click_eat_page from '../assets/img/click_eat_page.png';
import memory_jar_page from '../assets/img/memory_jar_page.png';
import dish_dig_page from '../assets/img/dish_dig_page.png';

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
      const projects = [
         {
            title: "Click Eat",
            imgSrc: click_eat_page,
            text: "A web project built with PHP, SQL, and CSS, offering a delightful food delivery experience. Browse a variety of restaurants, explore detailed dish information, and effortlessly place orders.",
            btnHref: "https://github.com/Dayhun/ClickEat",
         },
         {
            title: "Memory Jar",
            imgSrc: memory_jar_page ,
            text: "A captivating web project powered by React and Javascript server. Create your personal time capsule, storing cherished memories within a virtual jar that unlocks at your chosen time.",
            btnHref: "https://github.com/MemoryJarTeam/Memory_Jar/tree/mainReact",
         },
         {
            title: "Dish Dig",
            imgSrc: dish_dig_page,
            text: "A delightful web project built with Vue, PHP, and an external API. Explore a vast collection of recipes by searching ingredients or names. Save your favorites to your profile for easy access later.",
            btnHref: "https://github.com/LeticiaMatosGuerra/FinalProject",
         },
      ];
      
      return(
         <section className="portfolio" id="portfolio">
            <article>
              <h3>Portfolio</h3>
              <h4>Check out my projects!</h4>
            </article>
            
            {
               projects.map((project) => {
                  return(
                     <this.ProjectCard 
                        title= {project.title}
                        imgSrc= {project.imgSrc}
                        text = {project.text}
                        btnHref = {project.btnHref}
                     />
                  )
               })
            }
         </section>
      )
   }
}

export default ProjectsSection;