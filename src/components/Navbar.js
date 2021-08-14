import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="App.js"><Link to={"/src/App.js"} className="navbar-logo" onClick={closeMobileMenu}>
                        MATTHEWSIRAIT<i class="fas fa-fire"></i>
                    </Link></a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active':'nav-menu'} id='horizontal-list'>
                        <li className="nav-item">
                            <a href="App.js"><Link to={"./HeroSection.js"} className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="About.js"><Link to={"./About.js"} className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="Certification.js"><Link to='{"./Certification.js}' className='nav-links' onClick={closeMobileMenu}>
                                Certification
                            </Link></a>
                        </li>
                            <li className="nav-item"><a href="Contact.js"><Link to={'./About.js'} className='nav-links' onClick={closeMobileMenu}>
                                Contact 
                            </Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
