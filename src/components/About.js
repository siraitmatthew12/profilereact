import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import '../App.css'

export default function About() {
    return (
        <div class="mainabout">
        <div class="aboutcontainer">
            <div class="main_img--container">
                <img src="images/ppmatthew.svg" alt="pic" id="main__img"></img>
            </div>
            <div class="aboutcontent">
                <h1>About Me</h1>
                <h2>I’m an undergraduate student of electrical engineering </h2>
                <p>Find more about me</p>
                <button class="aboutbutton"><a href="https://www.canva.com/design/DAEGsVUbBVQ/ma-kwIbLggk_T0rYvefMAw/view?utm_content=DAEGsVUbBVQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">PROFILE</a></button>
            </div>

        </div>
    </div>

    )
}

