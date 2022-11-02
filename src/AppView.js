import React from "react";
import "./AppView.css";
import { useNavigate } from "react-router-dom";
import wallpaper from './images/wallpaper.png';




const AppView = (props) =>{
    const navigate = useNavigate();

    function closeApp(){
        var box=document.getElementsByClassName("transition2")[0];
        box.style.setProperty("left", box.offsetLeft + "px");
        box.style.setProperty("top", box.offsetTop + "px");
        box.style.setProperty("position", "absolute");
        box.className = "startTransition2";
        setTimeout(()=> {navigate("/");},500);
    }

    const dataItems = props.data.map(item => <li>{item}</li>);
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
                    <div class="app-content" style={{backgroundColor: `${props.color}`}}>
                        <h1>{props.title}</h1>
                        <ul>{dataItems}</ul>
                    </div>
                    <img class="transition2" src={wallpaper} />
                    <div class="mask">
                        <div class="speaker"></div>
                        <div class="camera">
                        </div>
                    </div>
                    <div class="homebar" onClick={()=> closeApp() }></div>
                    <div class="left">12:30</div>
                    <div class="right">98 ᯤ</div>

                </div>
            </div>
        </div>
        </body>
   
    );
};

export default AppView;