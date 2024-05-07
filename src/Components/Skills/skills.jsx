import React, { PureComponent } from "react";
import "./skills.css";
import SkillsBar from "../SkillsBar/SkillsBar"

class Skills extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      skillsList:[
        {
        sName:"HTML5",
        sProgress:90
       },
       {
        sName:"CSS",
        sProgress:80
       },
       {
        sName:"JS",
        sProgress:75
       },
       {
        sName:"Reat",
        sProgress:70
       },
       {
        sName:"Node.js",
        sProgress:70
       },
       {
        sName:"Figma",
        sProgress:60
       },
       {
        sName:"Wordpress",
        sProgress:50
       },

    ]
    };
  }

  render() {
    return (
      <>
      <div className="bg-dark text-white">
      <div className="skillbar-top-info  text-center mt-5 p-5">
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          accusantium illo esse excepturi minus rerum inventore velit
          deserunt culpa enim voluptate iusto assumenda quas ex aspernatur,
          nam id, fugit ipsam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto accusantium illo esse excepturi minus
          rerum inventore velit deserunt culpa enim voluptate iusto assumenda
          quas ex aspernatur, nam id, fugit ipsam.{" "}
        </p>
      </div>

      <div className="content-skills bg-dark text-white ">
        <div className="col-md-2 ">
          <h2 className="myFocus mb-3">My Focus</h2>
          <p className="mx-2">UI/UX Design</p>
          <p className="mx-2">Responsive Design</p>
          <p className="mx-2">Web Design</p>
          <p className="mx-2">Mobile App Design</p>
        </div>

        <div className="main-skills p-5  col-md-6">
          {this.state.skillsList.map((skill, index) => (
            <div className="skill-item" key={index}>
              <SkillsBar skillName={skill.sName} progress={skill.sProgress} />
            </div>
          ))}
        </div>
      </div>
      </div>
     
    </>
    );
  }
}

export default Skills;
