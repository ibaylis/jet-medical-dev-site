import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

// import projectPageHeader from "../public/images/phone_contact_icon.svg";

const AllEvents = ({data}) => {
  return (
    <>
      <div className='banner'>
          
      <Image priority src="http://localhost:10089/wp-content/uploads/2023/01/homeheader_1.jpg" width={1671} height={302} alt="Dia Flow"/>
      </div>
      <div className='mainProductPageNav'>
        <ul>
            <li><Link href="/">DIALYSIS</Link></li>
            <li><Link href="/projects-product-page">INFUSION</Link></li>
            <li><Link href="">INTRODUCER</Link></li>
            <li><Link href="">ACCESSORIES</Link></li>
                    
        </ul>
      </div>      
      {/* <div className="events_page">
            {data.map((ev) => (
              <Link className="card" key={ev.id} href={`/projects/${ev.id}`} passHref>
                  
                  {/* <Image src={ev.image} alt={ev.title} width={216} height={216} />
                  <div className='content'>
                      <h2> {ev.title} </h2>
                      {/* <p> {ev.description} </p> 
                </div> 
              </Link>
            ))}             
      </div>     */}
    </>
  )
}

export default AllEvents