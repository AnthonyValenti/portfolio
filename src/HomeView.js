import React from "react";
import "./HomeView.css"
import wallpaper from './images/wallpaper.png';
import skillsImage from './images/skills.png';
import workingImage from './images/working.png';
import contactImage from './images/contact.png';
import schoolImage from './images/education.png';
import githubImage from './images/github.png';
import linkedinImage from './images/linkedin.png';
import projectImage1 from './images/ice-hockey.png';
import projectImage2 from './images/python.png';
import dock from './images/dock.png';
import { useNavigate } from "react-router-dom";


const HomeView = () =>{
    const navigate = useNavigate();

    function openApp(endpoint,color){
        var box=document.getElementsByClassName("transition")[0];
        box.style.setProperty("left", box.offsetLeft + "px");
        box.style.setProperty("top", box.offsetTop + "px");
        box.style.setProperty("position", "absolute");
        box.style.setProperty("background",color);
        box.className = "startTransition";
        document.getElementById("dock").style.visibility="hidden";
        const collection = document.getElementsByClassName("icon-container");
        for (let i = 0; i < collection.length; i++) {
          collection[i].style.visibility = "hidden";
        }        setTimeout(()=> {navigate(`/${endpoint}`);},1000);
    }
    function openInNewTab (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        
        <div class="frame-base">
            <div class="frame-base-light"></div>
            <div class="side-button mute"></div>
            <div class="side-button volume-up"></div>
            <div class="side-button volume-down"></div>
            <div class="side-button hold"></div>
            <div class="stripe top"></div>
            <div class="stripe bottom"></div>
            <div class="port"></div>
            <div class="layer2">
                <div class="layer2-light"></div>
                <div class="layer2-light light-right"></div>
                <div class="screen">
                    <img alt="skills" src={wallpaper} id="background"/>
                    <div class="transition"></div>
                    <div class="icon-container">
                      <div class="app-icon" style={{backgroundColor: "lightcoral"}}>
                        <img class="app-icon" alt="skills" src={skillsImage}  onClick={()=> openApp("Skills","lightcoral")} />
                        Skills
                      </div>

                      <div class="app-icon" style={{backgroundColor: "lightblue"}}>
                      <img class="app-icon" alt="exp" src={workingImage}  onClick={()=> openApp("Experience","rgb(60,78,152)")} />
                        Work
                      </div>

                      <div class="app-icon" style={{backgroundColor: "rgb(27,49,47)"}}>
                      <img class="app-icon" alt="contact" src={contactImage}  onClick={()=> openApp("Contact","rgb(27,49,47)")} />
                        Contact
                      </div>

                      <div class="app-icon" style={{backgroundColor: "rgb(230,88,20)"}}>
                      <img class="app-icon" alt="contact" src={schoolImage}  onClick={()=> openApp("Education","rgb(230,88,20)")} />
                        School
                      </div>
                    </div>  

                    <div class="icon-container" >
              
                      <div class="app-icon" >
                        <img class="app-icon" id="github" alt="github" src={githubImage} onClick={()=> openInNewTab("https://github.com/AnthonyValenti")} />
                          GitHub
                      </div>

                      <div class="app-icon">
                      <img class="app-icon" alt="linkedin" src={linkedinImage} onClick={()=> openInNewTab("https://www.linkedin.com/in/anthonyvalenti2001/")} />
                          LinkedIn
                      </div>

                      <div class="app-icon">
                      <img class="app-icon" id="project1Image" alt="project1" src={projectImage1} onClick={()=> openInNewTab("https://puckenanalysis.netlify.app")} />
                          Project 1
                      </div>

                      <div class="app-icon">
                      <img class="app-icon" id="project2Image" alt="project2" src={projectImage2} onClick={()=> openApp("iMessageWrapped","grey")} />
                          Project 2
                      </div>
                    </div>

                    <div class="icon-container">
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                    </div>

                    <div class="icon-container">
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                    </div>
                    <div class="icon-container">
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                      <div class="app-icon"></div>
                    </div>
                    <img alt="skills" src={dock} id="dock"/>
                    <div class="homebar"></div>
                    <div class="mask">
                        <div class="speaker"></div>
                        <div class="camera">
                        </div>
                    </div>
                    <div class="left">12:30</div>
                    <div class="right">98 ᯤ</div>

                </div>

            </div>
        </div>
    );
};

export default HomeView;