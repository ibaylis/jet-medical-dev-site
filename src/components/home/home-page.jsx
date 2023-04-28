import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JetCarousel from '../../components/carousel'

import homeHeaderIMG from "../../../public/images/homeheader_1.jpg"
import contactHeader from "../../../public/images/contactheader.png";

import cvc1MainIMG from "../../../public/images/CVC_1.jpg";

import { Carousel } from "flowbite-react";

import { Alert } from "flowbite-react";

const homePage = ({data}) => {
  return (
    <>
        
<div className="banner">

        <Image priority src={homeHeaderIMG} width={1671} height={302} alt="..."/>
</div>
      {/* <div className="bannerCarousel h-56 sm:h-64 xl:h-80 2xl:h-96 px-11 mx-11">
           
            <Carousel>

                <Image className="" priority src={homeHeaderIMG} width={1671} height={302} alt="..."/>
                <Image className="" priority src={contactHeader} width={1671} height={302} alt="..."/>
                <Image className="" priority src={homeHeaderIMG} width={1671} height={302} alt="..."/>
                <Image className="" priority src={contactHeader} width={1671} height={302} alt="..."/>
                <Image className="" priority src={homeHeaderIMG} width={1671} height={302} alt="..."/>
            </Carousel>
        </div> */}
        
      
          {/* <div className="banner">
            <Carousel>
                <Image priority src={homeHeaderIMG} width={1671} height={302} alt="..."/>
                <Image priority src={contactHeader} width={1671} height={302} alt="..."/>
                <Image priority src={homeHeaderIMG} width={1671} height={302} alt="..."/>
                <Image priority src={contactHeader} width={1671} height={302} alt="..."/>
                <Image priority src={homeHeaderIMG} width={1671} height={302} alt="..."/>
            </Carousel>
          </div> */}

        {/* <Alert color="info">Alert!</Alert> */}
        

      <div className='contentArea'>
        {/* <p className='contentHeading'>Welcome</p> */}
        <span className='contentCopy'>Test JetMedical<sup>®</sup> develops, manufactures, markets and supports cutting-edge vascular access devices and accessories to meet the clinical needs of the medical industry, particularly in the fields of interventional medicine and dialysis. Our company&apos;s engineering and applications expertise provides superior products whose progressive designs accommodate advances in medicine and whose quality anticipates the requirements of our professional clients and the patients they serve. Currently one of the world&apos;s largest manufacturers of dialysis and centrally terminating venous catheters, Medcomp is, and always has been, on the cutting edge of new vascular access device technologies.</span>
      </div>
        <div className='contentHeadingProduct'>Product Lines</div>
        <div className='home_body'>
          {data?.slice(0, 4).map((ev) => (
            <Link className='card' key="1" href={`/projectsProductPage`}>
              <div className='image'>
                <Image width={216} height={216} alt="CVC" src={cvc1MainIMG} />
              </div>
              <div className='content'>
                <h2>DIALYSIS</h2>
                {/* <h2> {ev.title} </h2> */}
                {/* <p> {ev.description} </p> */}
              </div>
            </Link>

          ))}
        </div>

        {/* <div className='home_body'>
          {data?.slice(0, 4).map((ev) => (
            <Link className='card' key={ev.id} href={`/projects/${ev.id}`}>
              <div className='image'>
                <Image width={216} height={216} alt={ev.title} src={ev.image} />
              </div>
              <div className='content'>
                <h2> {ev.title} </h2>
                {/* <p> {ev.description} </p> 
              </div>
            </Link>

          ))}
        </div> */}
    </>
  )
}

export default homePage;