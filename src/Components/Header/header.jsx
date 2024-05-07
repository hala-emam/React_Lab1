

import React, { PureComponent } from 'react'
import bg_header from "../../Assets/bg-image.webp"
import "./header.css"
class Header extends PureComponent {
    
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
  
    render() {
        const myStyle = {
            backgroundImage:
                `url(${bg_header})`,
                height: "80vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding:"20px"
        };
        return (
            <>
            <div className="header" style={myStyle} >
                <h2 className='h2-header '>Hala Emam</h2>
                <p className='p-header'>Web Developer & Designer</p>
                <button className='btn-contact btn btn-outline-info text-info'>CONTACT US</button>
            </div>
            </>
        )
    }
}

export default Header