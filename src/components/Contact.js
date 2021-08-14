import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import '../App.css'

function contact() {
    return (
        <div>
            <div class="maincontact">
        <div class="contactcontainer">
            <h1>Stay in Touch</h1>
            <p class="contactexp">For updates, follow me on <a href="https://www.facebook.com/matthew.sirait/" class="socmedlogo" id="facebook">Facebook</a>, <a href="https://twitter.com/SiraitMatthew" class="socmedlogo" id="twitter">Twitter</a>,
             <a href="https://www.instagram.com/siraitmatthew12/" class="socmedlogo" id="instagram"> Instagram</a>, or my <a href="https://www.linkedin.com/in/matthew-sirait-697055201/" class="socmedlogo" id="linkedin">Linkedin</a></p>
        <div class="longline"></div>
        <div class="copyright">© Copyright 2021 Matthew Gabriel Hasiholan. All rights reserved</div>
        </div>
    </div>
        </div>
    )
}

export default contact
