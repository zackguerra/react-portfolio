import React from 'react'
import './Works.css'

import lacrosse1 from '../../img/projects/lacrosse1.jpg'
import lacrosse2 from '../../img/projects/lacrosse2.jpg'
import lacrosse3 from '../../img/projects/lacrosse3.jpg'
import lacrosse4 from '../../img/projects/lacrosse4.jpg'
import cricket1 from '../../img/projects/cricket1.png'
import cricket2 from '../../img/projects/cricket2.png'
import cricket3 from '../../img/projects/cricket3.png'
import cricket4 from '../../img/projects/cricket4.png'
import { FaReact,FaHtml5,FaCss3Alt } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiJavascript,SiPhp } from 'react-icons/si';



import 'react-slideshow-image/dist/styles.css'

function Works() {
    return (
        <div className="works-page-wrap">
            <div className="pageTitle">Works</div>
            
            <br/>
            <br/>
            <div className="pageTitle titleproject">Pro Caliber Lacrosse</div>
            <div className="lacrosse-wrap">
                <a href="http://procaliberlacrosse.com/">
                

            
                <div className="lacrosse-project">
                    <div className="workblock"><img src={lacrosse1} alt=""/></div>
                    <div className="workblock"><img src={lacrosse2} alt=""/></div>
                    <div className="workblock"><img src={lacrosse3} alt=""/></div>
                    <div className="workblock"><img src={lacrosse4} alt=""/></div>
                </div>
                </a>                

            </div>
                <div className="textWorks">
                    <h3>Website Created for the Professional Coach Tyler Pace from Pro Caliber Lacrosse, Vancouver, BC</h3>
                </div>
            
            <br/>
            <br/>
            <div className="pageTitle titleproject">West Van Cricket Club</div>
            <div className="cricket-wrap">
                <a href="https://zackguerra.github.io/Cricket_Club/index.html">
                <div className="lacrosse-project">
                    <div className="workblock"><img src={cricket1} alt=""/></div>
                    <div className="workblock"><img src={cricket2} alt=""/></div>
                    <div className="workblock"><img src={cricket3} alt=""/></div>
                    <div className="workblock"><img src={cricket4} alt=""/></div>
                </div>
                </a>
            </div>
            <div className="textWorks">
                    <h3>Website Created for the Professional West Vancouver Cricket Club, Vancouver, BC</h3>
            </div>

                

            

              
        </div>
    )
}

export default Works