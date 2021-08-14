import React from 'react'
import './Certification.css'
import '../App.css'
import { Link } from 'react-router-dom'

function Certification() {
    return (
    <div class="maincertification">
        <div class="certificationcontainer">
        <h1>Online Certification</h1>
            <div class="certificationcontent">
                <div class="python">
                    <img align="center" src="images/py.svg" alt=""/></div>
                    <div class="wall"></div>
                    <div>
                        <h2>Basic Python Programming</h2>
                    <p id="exp" >Completed in 3rd July 2021</p>
                    <button class="certificatebutton"><a href="https://www.dicoding.com/certificates/MEPJLRLMJZ3V">Pyton Certificate</a></button>
                    </div>
                <div class="c">
                    <img src="images/c.svg" alt=""/></div>
                    <div class="wall"></div>
                    <div>
                        <h2>Basic C Programming</h2>
                    <p id="exp">Completed in 4th August 2021</p>
                    <button class="certificatebutton"><a href="https://www.dicoding.com/certificates/0LZ03Q11QZ65">C Certificate</a></button>
                    </div>
                <div class="exc">
                    <img src="images/excel.svg" alt=""/></div>
                    <div class="wall"></div>
                    <div>
                        <h2>Basic Data Visualization</h2>
                    <p id="exp">Completed in 15th June 2021</p>
                    <button class="certificatebutton"><a href="https://www.dicoding.com/certificates/2VX3NQ5V4XYQ">Data Visualization Certificate</a></button>
                    </div>
                <div class="tensor">
                    <img src="images/tensorflow.svg" alt=""/></div>
                    <div class="wall"></div>
                    <div>
                        <h2>Basic Machine Learning</h2>
                    <p id="exp">Completed in 3rd August 2021</p>
                    <button class="certificatebutton"><a href="https://www.dicoding.com/certificates/JMZV21MQQZN9">Machine Learning Certificate</a></button>
                    </div>
                <div class="HTML5">
                    <img src="images/htmllogo.svg" alt="" class="logo"/></div>
                    <div class="wall"></div>
                    <div>
                        <h2>Basic Website Structure</h2>
                    <p id="exp">Completed in 12th August 2021</p>
                    <button class="certificatebutton"><a href="https://progate.com/courses/html#certificate">HTML5 Certificate</a></button>
                    </div>
                <div class="CSS3">
                    <img src="images/csslogo.svg" alt="" class="css"/></div>
                    <div class="wall"></div>
                    <div>
                        <h2>Basic Machine Learning</h2>
                    <p id="exp">Completed in 12th August 2021</p>
                    <button class="certificatebutton"><a href="https://progate.com/courses/html#certificate">CSS3 Certificate</a></button>
                    </div>
                </div>
                <div class="foremore">
                    <p class="morecertification">All of these was earned from</p>
                    <div className="online-cw">
                        <div className="dicoding">
                            <img src="images/dicoding.svg" alt="" />
                        </div>
                            
                        <div className="progate">
                            <img src="images/progate.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification
