import React from 'react'
import './Home.css'
import profilepic from '../../img/profilepic.jpg'
import ReactTypingEffectDemo from '../../utilities/ReactTypingEffectDemo'




function Home() {
    return (
        
        <div className='home-wrap'>
            <div className="profilepic"> <img src={profilepic} alt="profile" /> </div>
            <h1 className="title-std">Zack Guerra</h1>
            <br />
            < ReactTypingEffectDemo />
            <br />
            <div className="socialIcon">
                <a href="https://instagram.com/zackguerra" class="fa fa-instagram" target="_blank"></a>                
                <a href="https://twitter.com/zackguerra" class="fa fa-twitter" target="_blank"></a>
                <a href="https://github.com/zackguerra" class="fa fa-github" target="_blank"></a>
                <a href="https://www.linkedin.com/in/zackguerra/" class="fa fa-linkedin" target="_blank"></a>
            </div>

            <br />
            <br />
            <a href="mailto:ezequiasguerra@yahoo.com.br" class="contactBtn">Contact me</a>
            
        </div>

        
    )
}

export default Home
