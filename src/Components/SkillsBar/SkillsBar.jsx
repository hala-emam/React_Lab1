import React, { PureComponent } from 'react'
import "./SkillsBar.css"


class SkillsBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let { skillName, progress }=this.props;
        return (
            <>
        
            <div className="skillbar clearfix" data-percent="100%">
           <h4 className="skillbar-title">
              <span>{skillName}</span>
            </h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
           </div>
      
      
        </>
        
        )
    }
}

export default SkillsBar