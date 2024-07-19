import React, { useState } from 'react'
import './Value.css';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import data from '../../utils/accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';


const value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left.side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right.side */}
          <div className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value we give to you</span>
            <span className='secondaryText'>We beleive a good balance to live can make your life better</span>
          
        <Accordion
        className="accordian"
        allowMultipuleExpanded={false}
        preExpanded={[0]}
        >
        {
          data.map((item,i)=> {
            return(
            <AccordionItem className="accordionItem" key={i} uuid={i}>
              <AccordionItemHeading>
              <AccordionItemButton className='flexCenter accordionButton'>
               <div className="flexCenter icon">{item.icon}</div>
               <span className="primaryText">{item.heading}</span>
                <div className="flexCenter icon">
                  <MdOutlineArrowDropDown size={20}/>
                </div>
                
              </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="secondaryText">{item.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
            )
          })
        }
        </Accordion>
        </div>
        </div>
    </section>
  )
}

export default value