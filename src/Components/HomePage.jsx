import React from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Bish from '../img/Bish.png'
import Carousel from 'react-elastic-carousel';
import Intersect from '../img/Intersect.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'



const HomePage = () => {
    return (
        <div className='hero'>
            <img className="logo" width="100%" height="100%" src={Bish} alt="" />

            <div className='content'>
                <h1>BISHKEK</h1>
                <p>Bishkek is situated along the Alaarcha <br />and Alamedin rivers and intersects in <br /> the north with the Bolshoy (Great) Chuysky Canal.</p>
                <div>
                    <Link to='/register' className='btn'>Explore</Link>
                    <Link to='/login' className='btn btn-light'>Login</Link>

                </div>
                <div className="img">
                    <div className="img1">
                        <img src={Intersect} alt="" />

                    </div>
                    <div className="img2">
                        <img src={img2} alt="" />

                    </div>
                    <div className="img3">
                        <img src={img3} alt="" />
                    </div>

                </div>


            </div>
        
        </div>
            
    );
};

export default HomePage;