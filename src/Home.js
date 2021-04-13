import React from 'react';
import './Home.css';
import home from './img/AmazonHome.jpg';
import Product from "./Product";
import lean from "./img/Lean.jpg";
import pasta from "./img/pasta.jpg";
import watch from "./img/watch.jpg";
import speaker from "./img/speaker.jpg";
import ipad from "./img/ipad.jpg";
import monitor from "./img/monitor.jpg";
import jacket from "./img/jacket.jpg";
import pants from "./img/pants.jpg";
import chair from "./img/chair.jpg";
import Slide1 from "./img/Slider1.jpeg"
import Slide2 from "./img/Slider2.jpeg"
import Slide3 from "./img/Slider3.jpeg"
import Slide4 from "./img/Slider4.jpeg"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                
                    <div id="slider">
                        <div>
                         <img src={home} alt="" />
                        </div>


                        <div>
                        <img src={Slide2} alt=""/>
                        </div>

                        <div>
                        <img src={Slide1} alt=""/>
                        </div>
                        
                        <div>
                        <img src={Slide3} alt=""/>
                        </div>

                        <div>
                        <img src={Slide4} alt=""/>
                        </div>

                    </div>

                

            <div className="home__row">
                <Product 
                id="192746784691"
                title="The Lean Startup"
                price={29.99}
                image={lean}
                rating={2}
                />
                <Product 
                id="1927223566791"
                title="IUGA High Waisted Yoga Pants for Women with Pockets Capri Leggings for Women Workout Leggings for Women Yoga Capris"
                price={19.95}
                image={pants}
                rating={4}
                />
                <Product 
                 id="173454524529"
                 title="ANTREE Pasta Maker Attachment for KitchenAid Stand Mixers with Pasta Drying Rack & Cleaning Brush, 3-1 Set..."
                 price={101.99}
                 image={pasta}
                 rating={5}
                 />
                <Product 
                 id="173845382214234535529"
                 title="Legendary Whitetails Men's Journeyman Shirt Jacket..."
                 price={45.41}
                 image={jacket}
                 rating={3}
                 />
                
            </div>

            <div className="home__row">
            <Product 
             id="3274529387509238"
             title="Smart Watch with Call,Health and Fitness Smartwatch with Heart Rate Blood Pressure SpO2 Monitor Sleep..."
             price={149.99}
             image={watch}
             rating={3}/>
            <Product 
            id="9374875520"
            title="Bluetooth Speakers, DOSS SoundBox Pro Portable Wireless Bluetooth Speaker with 20W Stereo Sound..."
            price={39.99}
            image={speaker}
            rating={5}
            />
            <Product 
            id="1738453820529"
            title="New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Silver (Latest Model, 4th Generation)"
            price={559.99}
            image={ipad}
            rating={4}
            />
            </div>

            <div className="home__row">
            <Product
            id="17384538205292214"
            title="VIOTEK SUW49C 49-Inch Super Ultrawide 32:9 Curved Monitor with Speakers, 144Hz HDR 4ms 3840x1080p, FreeSync, GamePlus, VESA & More"
            price={729.99}
            image={monitor}
            rating={5}
            />
            <Product
            id="1723124124320529"
            title="Dowinx Gaming Chair Office Desk Chair with Massage Lumbar Support, Vintage Style Armchair PU Leather E-Sports Gamer Chairs with Retractable Footrest (Ivory)"
            price={239.99}
            image={chair}
            rating={4}
            />
            </div>
            </div>

        </div>
    )
}

export default Home
