import React from "react";

import Accordion from 'react-bootstrap/Accordion';

class AboutSection extends React.Component{

   AccordionItem(item) {
      return (
            <Accordion.Item eventKey={item.id}>
               <Accordion.Header>{item.header}</Accordion.Header>
               <Accordion.Body>
                  {item.body}
               </Accordion.Body>
            </Accordion.Item>
      );
      }

   render(){
      const items = [
         {
            id: "0",
            header: "Who Am I?",
            body: "I'm Jacques, a Brazilian with an insatiable curiosity for the world around me. From a young age, I found joy in dismantling objects and exploring the inner workings of technology. My fascination with electronics, mechanics, and new technologies grew over time, fueling my passion for learning. This innate curiosity has been the driving force behind my journey into engineering and web development. Always eager to discover new knowledge and push boundaries, I strive to continually expand my skills and contribute to the ever-evolving world of technology."
         },
         {
            id: "1",
            header: "My Academic Education",
            body: "My academic journey began with mechatronics engineering, a course that provided me with a solid foundation in programming logic, electronics, and problem-solving. Here, I had my first exposure to languages like C and assembly, which shaped my programming skills and problem-solving abilities. Seeking to broaden my horizons, I decided to take a web development course in Canada. Through this immersive experience, I delved into the fundamentals of front-end development, including CSS, HTML, and JavaScript. I also gained proficiency in frameworks like React and Vue, and explored back-end development using PHP and JavaScript. This comprehensive education has equipped me with a holistic understanding of the full-stack development process."
         },
      ];

      return(
         <section>
            <article>
               <h3>About</h3>
               <h4>Here the main information about me, my preferences and my professional goals</h4>
            </article>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
               {
                  items.map((item) => {
                     return(
                        <this.AccordionItem
                           id={item.id}
                           header={item.header} 
                           body={item.body}
                        />
                     )
                  })
               }
            </Accordion>
         </section>
      )
   }
}

export default AboutSection;