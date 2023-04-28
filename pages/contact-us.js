import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import contactUSIMG from "../public/images/contactheader.png";


const ContactUsPage = () => {
  return (
    <>
      <div className=''>
          
          <Image priority src={contactUSIMG} width={1900} height={200} alt="Contact us"/>
          </div>
         
          <div className="products_page">
              <div className='productContentArea'>
                <span className='contentCopy'>
                      The <strong>Jet LT CVC Central Venous Catheter</strong> is indicated for Long Term central venous access in adults
                      and children. It can be used for total parenteral nutrition (T.P.N), infusion, blood products, and drugs. It can 
                      also be used for repeated with drawl of blood samples. 
                  </span>
                  <div>
                      <ul>
                        <li><strong>Lumens:</strong> Single, Dual, &amp; Triple</li>
                        <li><strong>Lengths:</strong> 90cm</li>
                        <li><strong>Material:</strong> Silicone</li>
                        <li><strong>Available In:</strong> 7F, 9.5F, 11F, &amp; 12.5F</li>
                      </ul>
                  </div>
    
              </div>

        
          </div>    

    </>
  )
}

export default ContactUsPage
