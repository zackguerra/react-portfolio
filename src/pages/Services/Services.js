import React from 'react'
import './Services.css'
import design from '../../img/uxlogo.png'
import webdev from '../../img/weblogo.png'
import business from '../../img/businesslogo.png'


function Services() {
    return (
        <div>
            <div className="pageTitle">Services</div>
                <div className="services-wrap">

                    <div className="textServices textdesign">
                        <h1>UI/UX design</h1>
                        <br />             
                        <img src={design} alt="ux"/>
                        <br />
                        <h3>In addition to knowing how to use design tools, I am creative and think outside the box, bringing new and current ideas to your company / brand.</h3>
                        <br />
                    </div>

                    <div className="textServices textweb">
                        <h1>Web Dev.</h1>  
                        <br />             
                        <img src={webdev} alt="web"/>
                        <br />
                        <h3>I can develop websites in html and also in React, I can develop a complete e-commerce on platforms such as woocommerce, wix and shopify with advanced SEO parameters and with a modern and clean look.</h3>
                        <br />
                    </div>

                    <div className="textServices textmanagement">
                        <h1>Management</h1>  
                        <br />             
                        <img src={business} alt="business"/>
                        <br />
                        <h3>Lining up the knowledge of development with my business experience, I will merge building your website, aligning the marketing / sales / public strategies with the entire development of the website.</h3>
                        <br />
                    </div>
                    
                </div>
        </div>
    )
}

export default Services
