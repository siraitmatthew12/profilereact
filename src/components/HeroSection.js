import React from 'react';
import {Link} from 'react-router-dom';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
    return (
        <div class="main">
            <video src="videos\video.mp4" autoPlay loop muted></video>
            <div class="maincontainer">
                <div class="maincontent">
                    <h1>Welcome to My</h1>
                    <h2>ProfileWebsite</h2>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
