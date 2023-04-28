import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import styles from './projectsProductTab.module.css';

function projectsProductTab() {
  return (
    <>
    <div className='bodyJetProd'>
        <div className='containerJetProd'>
            <div className='main-title'>Jet Medical Products Tab</div>
            <div className='content'>
                <input type="radio" name="indicator" defaultChecked id="home" />
                <input type="radio" name="indicator" id="blog" />
                <input type="radio" name="indicator" id="help" />
                <input type="radio" name="indicator" id="code" />
                <input type="radio" name="indicator" id="about" />
                <div className='list'>
                    <label for="home" className='home'>
                        <i className='fas fa-home'></i>
                        <span className='topic'>Home</span>
                    </label>
                    <label for="blog" className='blog'>
                        <i className='fas fa-blog'></i>
                        <span className='topic'>Blog</span>
                    </label>
                    <label for="help" className='help'>
                        <i className='fas fa-envelope'></i>
                        <span className='topic'>Help</span>
                    </label>
                    <label for="code" className='code'>
                        <i className='fas fa-code'></i>
                        <span className='topic'>Code</span>
                    </label>
                    <label for="about" className='about'>
                        <i className='fas fa-user'></i>
                        <span className='topic'>About</span>
                    </label>
                    <div className='indicator'></div>
                </div>
                <div className='text-content'>
                    <div className='home text'>
                        <div className='title'>Home Content</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quia unde modi quidem nulla, explicabo molestias repellendus 
                            est laudantium inventore dolorem veniam sint, quaerat odit 
                            veritatis alias. Cupiditate ut rerum at vero hic tempore quo 
                            pariatur aliquid earum, modi cum natus qui saepe temporibus 
                            amet harum doloribus doloremque deleniti aut? Excepturi voluptatem 
                            facere, exercitationem velit eligendi eaque quam eum optio porro 
                            fuga esse. Sint, unde aliquid totam aut, natus dolores nam 
                            consectetur ab voluptas, quia magnam magni! Nesciunt suscipit 
                            provident incidunt corrupti molestias eaque beatae vitae, odit non.
                            Minima, hic nulla!
                        </p>

                    </div>
                    <div className='blog text'>
                        <div className='title'>Blog Content</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quia unde modi quidem nulla, explicabo molestias repellendus 
                            est laudantium inventore dolorem veniam sint, quaerat odit 
                            veritatis alias. Cupiditate ut rerum at vero hic tempore quo 
                            pariatur aliquid earum, modi cum natus qui saepe temporibus 
                            amet harum doloribus doloremque deleniti aut? Excepturi voluptatem 
                            facere, exercitationem velit eligendi eaque quam eum optio porro 
                            fuga esse. Sint, unde aliquid totam aut, natus dolores nam 
                            consectetur ab voluptas, quia magnam magni! Nesciunt suscipit 
                            provident incidunt corrupti molestias eaque beatae vitae, odit non.
                            Minima, hic nulla!
                        </p>

                    </div>
                    <div className='help text'>
                        <div className='title'>Help Content</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quia unde modi quidem nulla, explicabo molestias repellendus 
                            est laudantium inventore dolorem veniam sint, quaerat odit 
                            veritatis alias. Cupiditate ut rerum at vero hic tempore quo 
                            pariatur aliquid earum, modi cum natus qui saepe temporibus 
                            amet harum doloribus doloremque deleniti aut? Excepturi voluptatem 
                            facere, exercitationem velit eligendi eaque quam eum optio porro 
                            fuga esse. Sint, unde aliquid totam aut, natus dolores nam 
                            consectetur ab voluptas, quia magnam magni! Nesciunt suscipit 
                            provident incidunt corrupti molestias eaque beatae vitae, odit non.
                            Minima, hic nulla!
                        </p>

                    </div>
                    <div className='code text'>
                        <div className='title'>Code Content</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quia unde modi quidem nulla, explicabo molestias repellendus 
                            est laudantium inventore dolorem veniam sint, quaerat odit 
                            veritatis alias. Cupiditate ut rerum at vero hic tempore quo 
                            pariatur aliquid earum, modi cum natus qui saepe temporibus 
                            amet harum doloribus doloremque deleniti aut? Excepturi voluptatem 
                            facere, exercitationem velit eligendi eaque quam eum optio porro 
                            fuga esse. Sint, unde aliquid totam aut, natus dolores nam 
                            consectetur ab voluptas, quia magnam magni! Nesciunt suscipit 
                            provident incidunt corrupti molestias eaque beatae vitae, odit non.
                            Minima, hic nulla!
                        </p>

                    </div>
                    <div className='about text'>
                        <div className='title'>About Content</div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quia unde modi quidem nulla, explicabo molestias repellendus 
                            est laudantium inventore dolorem veniam sint, quaerat odit 
                            veritatis alias. Cupiditate ut rerum at vero hic tempore quo 
                            pariatur aliquid earum, modi cum natus qui saepe temporibus 
                            amet harum doloribus doloremque deleniti aut? Excepturi voluptatem 
                            facere, exercitationem velit eligendi eaque quam eum optio porro 
                            fuga esse. Sint, unde aliquid totam aut, natus dolores nam 
                            consectetur ab voluptas, quia magnam magni! Nesciunt suscipit 
                            provident incidunt corrupti molestias eaque beatae vitae, odit non.
                            Minima, hic nulla!
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <style jsx>
        {
            `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .bodyJetProd {
                min-height: 100vh;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #dad3f8;
            }
            .containerJetProd {
                max-width: 950px;
                width: 100%;
                background: #fff;
                border-radius: 12px;
                margin: 0 20px;
                padding: 40px 50px 40px 40px;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
            }

            .containerJetProd .main-title {
                font-size: 30px;
                font-weight: 500;
                margin-bottom: 20px;
            }
            .containerJetProd .content {
                display: flex;
                align-items: center;
                justify-content: space-between;

            }
            .containerJetProd .content .list {
                display: flex;
                flex-direction: column;
                position: relative;
                width: 20%;
                margin-right: 50px;
            }

            .content .list label {
                height: 60px;
                font-size: 22px;
                font-weight: 500;
                border-radius: 12px;
                line-height: 60px;
                cursor: pointer;
                
                padding-left: 25px;
                color: #333;
                z-index: 12;
                transition: all 0.4s ease;
            }

            .content .list label:hover {
                color: #6d50e2;
            }

            #home:checked ~ .list .home,
            #blog:checked ~ .list .blog,
            #help:checked ~ .list .help,
            #code:checked ~ .list .code,
            #about:checked ~ .list .about {
                color: #fff;
            }

            .content .indicator {
                position: absolute;
                height: 60px;
                width: 100%;
                top: 0;
                left: 0;
                background: #6d50e2;
                border-radius: 12px;
                transition: all 0.4s ease;
            }

            

            #home:checked ~ .indicator {
                top: 0;
            }
            #blog:checked ~ .list .indicator {
                top: 60px;
            }
            #help:checked ~ .list .indicator {
                top: 120px;
            }
            #code:checked ~ .list .indicator {
                top: 180px;
            }
            #about:checked ~ .list .indicator {
                top: 240px;
            }

            .containerJetProd input[type="radio"] {
                display: none;
            } 

            .containerJetProd .content .text-content {
                width: 80%;
                height: 100%;
            }            

            .containerJetProd .text-content .text {
                display: none;
            }    

            .containerJetProd .text-content .home {
                display: block;
            }        

            #home:checked ~ .text-content .home,
            #blog:checked ~ .text-content .blog,
            #help:checked ~ .text-content .help,
            #code:checked ~ .text-content .code,
            #about:checked ~ .text-content .about {
                display: block;
            }

            #blog:checked ~ .text-content .home,
            #help:checked ~ .text-content .home,
            #code:checked ~ .text-content .home,
            #about:checked ~ .text-content .home {
                display: none;
            }            
            
            .containerJetProd .text-content .title {
                font-size: 25px;
                font-weight: 500;
                margin-bottom: 10px;
            }

            .containerJetProd .text-content p {
                text-align: justify;
            }     
            
         

            `
        }
        
    </style>
    </>
  )
}

export default projectsProductTab;