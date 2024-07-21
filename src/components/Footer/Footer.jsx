import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="g-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* <span className='primaryText'>Get Started</span>
                <span className='secondaryText'>Subscribe and find super excited offers
                <br/>
                Find Your residence Soon
                </span>
                <button className="button">
                    <a href="piya.saksham007@gmail.com">Get Started</a>
                </button>  */}

                {/* leftside */}
                <div className="flexColStart f-left">
                  <img src="logo.png" alt="" width={120} />
                  <span className="secondaryText">
                    Our vision is to make all people  <br/>
                    the best place to live for them.
                  </span>
                  
                <div className='flexColStart Text'>
                  <span>Subscribe and find super excited offers</span>
                 
                  <button className="button">
                    <a href="piya.saksham007@gmail.com">Get Started</a>
                  </button>
                </div>
                </div> 

                {/* right side  */}
                <div className="flexColStart f-right">
                  <span className='orangeText'>Information</span>
                  <span className='secondaryText'>145 KTM, Nexal</span>
                
                <div className="flexStart f-menu">
                  <span>Property</span>
                  <span>Services</span>
                  <span>Product</span>
                  <span>About Us</span>
                </div>
             </div>
           </div>
           
    </section>
  )
}

export default Footer