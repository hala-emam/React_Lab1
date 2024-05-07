import React, { PureComponent } from 'react'

class PortfolioCard extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let{description,title}=this.props;
        return (
           <>

           <div>
           <h3 className={title === "WEB DESIGN" ? "border-b-1" : ""}>{title}</h3>
           <h3>{description}</h3>
           </div>

           </> 
        )
    }
}

export default PortfolioCard