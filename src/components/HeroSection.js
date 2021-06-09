

import React from 'react'
import "./HeroSection.css";
function HeroSection() {
    return (
        <div className="heroSection">
           <div className="heroSection__container">
           <h1>Welcome To <span>ProductName</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptates, illum repellendus, quibusdam ratione nulla vel et numquam consequuntur esse nemo aliquam. Corporis, asperiores.</p>
            <form method="post">
                <div className="form__group">
                    <input type="email" name="email" id="" placeholder="Enter Your Email"/>
                    <input type="submit" value="Send" />
                </div>
            </form>
           </div>
        </div>
    )
}

export default HeroSection
