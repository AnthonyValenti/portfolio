import React from "react";
import "./HomeView.css"
import wallpaper from './images/wallpaper.png';
import skillsImage from './images/skills.png';
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
        document.getElementsByClassName("icon-container")[0].style.visibility="hidden";
        setTimeout(()=> {navigate(`/${endpoint}`);},1000);
    }

    return(
        
        <body>
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
                      <div class="app-icon" style={{backgroundColor: "red"}}>
                        <img class="app-icon" alt="skills" src={skillsImage}  onClick={()=> openApp("Skills","red")} />
                        Skills
                      </div>
                      <div class="app-icon">
                      <img class="app-icon" alt="skills" src={skillsImage}  onClick={()=> openApp("Test","lightblue")} />
                        test
                      </div>
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
        </body>
    );
};

export default HomeView;