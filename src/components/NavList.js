import React from "react";

class NavList extends React.Component{
   render(){
      return(
         <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>
      )
   }
}

export default NavList;