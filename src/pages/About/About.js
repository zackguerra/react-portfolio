import React from 'react'
import "./About.css"
import avatar from '../../img/akuaku.jpg'
// import reactlogo from '../../img/react-logo.png'
// import htmllogo from '../../img/html5-logo.png'
// import csslogo from '../../img/css-logo.png'
// import javalogo from '../../img/js-logo.png'
// import mongologo from '../../img/mongodb-logo.png'
import { FaReact,FaHtml5,FaCss3Alt } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';





function About() {
    return (
        <div className='about-wrap'>

            <div className="avatar">
                <h1 className="title-std">About Me</h1>
                <br />
            </div>

            <div className="textAndSkills">
                <img src={avatar} alt="avatar" />
                
                <div className="textAbout">
                    <h3>I am Zack Guerra, web developer from Vancouver, Canada. I have experience in web site design and building and customization, also I am good at Illustrator.</h3>
                    <br />
                    <h3>I’m a person who is passionate by arts in general. After 10 years working with Strategic Business Management, Logistics, marketing in technology area, I decided to run after my dream to do what I love, working in Tech area, Media, Graphic Design and Development.
                    <br />
                    <br />

                    After that tough decision I started my studies in Vancouver as a Web/Mobile Developer at Cornerstone Intl College, learning about web development, currently studying Unity and developing a Indie game.
                    <br />
                    <br />
                    I am looking forward to start working in Development Tech area where I finally had my chance to develop websites, softwares, games, design arts and ideas, learn and pass my passion, knowledge and experience forward.</h3>
                    <a href="https://drive.google.com/file/d/1yJCKDA8fEZdwXBg4-VoodeeFiaZtqGoV/view?usp=sharing" class="contactBtn" target="_blank">Download CV</a>

                </div>
                
                <div className="barProgress">
                    <h3>Front End Development</h3>
                    <div class="progress1">                    
                        <div class="progress-value1"></div>
                    </div>
                    
                    <br />
                    <h3>UI/UX Design</h3>
                    <div class="progress2">                    
                        <div class="progress-value2"></div>
                    </div>

                    <br />
                    <h3>Project Management</h3>
                    <div class="progress3">                    
                        <div class="progress-value3"></div>
                    </div>

                    <br />
                    <h3>Games</h3>
                    <div class="progress4">                    
                        <div class="progress-value4"></div>
                    </div>

                    

                </div>       
            
            </div>

            

            <div className="language-logos">
                <p><FaReact /></p>
                <p><FaHtml5 /></p>
                <p><FaCss3Alt /></p>
                <p><SiJavascript /></p>
                <p><DiMongodb /></p>
            </div>
            
         
            
        </div>
    )
}

export default About
