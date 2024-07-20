import React from 'react'
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
        { /* left.side */ }
        <div className="flexColStart c-left">
            <span className="orangeText">Our Contact Us</span>
            <span className="primaryText">Easy To Contact Us</span>
            <span className="secondaryText">We always ready to help by providing the best services for you. We believe a good place to live can make a better life to live</span>

            <div className="flexColStart contactModes">
                {/* first row  */}
                <div className="flexStart row">
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className=" flexCenter icon">
                            <MdCall size={15}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span> 
                                <span className='secondaryText'>977-9876543212</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>
              
                 <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className=" flexCenter icon">
                            <BsFillChatDotsFill size={15}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span> 
                                <span className='secondaryText'>977-9876543212</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>
                </div>

                {/* Second Row */} 
                <div className="flexStart row">
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className=" flexCenter icon">
                            <BsFillChatDotsFill size={15}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span> 
                                <span className='secondaryText'>977-9876543212</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>
                

                <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className=" flexCenter icon">
                            <HiChatBubbleBottomCenter size={15}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span> 
                                <span className='secondaryText'>977-9876543212</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>
                </div>
            </div>
        </div>
        {/* right.side */}
        <div className="c-right">
            <div className="image-container">
            <img src="./contact.jpg" alt="" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact

