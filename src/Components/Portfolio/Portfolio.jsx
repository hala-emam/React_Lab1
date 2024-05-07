import React, { PureComponent } from 'react'
import PortfolioCard from './PortfolioCard'
import "./Portfolio.css"

class Portfolio extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className='mt-5 mb-5 p-3'>Portfolio</h1>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow bg-light ">
                            <PortfolioCard title="WEB DESIGN"  />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow bg-light">
                            <PortfolioCard title="WEB DESIGN"  />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow bg-light">
                            <PortfolioCard title="WEB DESIGN"  />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow bg-light">
                            <PortfolioCard title="Web Application" description="Development" />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow bg-light">
                            <PortfolioCard title="Web Application" description="Development" />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow bg-light">
                            <PortfolioCard title="Web Application" description="Development" />
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Portfolio