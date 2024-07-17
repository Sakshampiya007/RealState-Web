import React from 'react';
import "./Hero.css";
// import HiLocationMaker from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero-wrapper">
    <div className="paddings innerWidth flexCenter hero-container">

        <div className="flexColStart hero-left">
        <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
                Discover <br /> Most Suitable <br /> Property
            </h1>
        </div>

        {/* <div className="search-bar">
           <HiLocationMaker color = "blue" size={25}  />
        </div> */}

        <div className="flexColStart hero-des">
            <span className='secondaryText'>Find a variety of Property that suit you very easily</span> 
            <span className='secondaryText'>Forget all the difficulties in finding a residence for you</span>
        </div>

        <div className="flexCenter stats">
            <div className="flexColCenter stat">
            <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
            </span>
            <span className='secondaryText'> Premiun Products </span>
            </div>

            <div className="flexColCenter stat">
            <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
            </span>
            <span className='secondaryText'> Happy Customers </span>
            </div>

            <div className="flexColCenter stat">
            <span>
                <CountUp end={28} />
                <span>+</span> 
            </span>
            <span className='secondaryText'> Award Winning </span>
            </div>
        </div>
    </div>
        {/* right side */}

        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src="./hero-image.png" alt="" />
            </div>
            </div>
    </div> 
    </section>
    
  )
}

export default Hero