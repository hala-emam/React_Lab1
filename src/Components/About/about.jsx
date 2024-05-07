import React, { PureComponent } from 'react'
import "./about.css"
class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
           <>
           <div className="about">
            <div className="title"><h2>About Me</h2></div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Consectetur minus deleniti minima quisquam inventore dolorum cum nam, 
                     at illo soluta iure accusantium impedit magnam quae consequuntur 
                     earum provident sint beatae?,Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Consectetur minus deleniti minima quisquam inventore dolorum cum nam, 
                     at illo soluta iure accusantium impedit magnam quae consequuntur 
                     earum provident sint beatae?</p>
                <button className='btn btn-dark'>Download Resume</button>
            </div>
           </div>
           </> 
        )
    }
}

export default About