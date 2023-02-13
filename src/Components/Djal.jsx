import React from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Bish from '../img/djal.png'
import Carousel from 'react-elastic-carousel';
import Intersect from '../img/dj1.png'
import img2 from '../img/dj2.png'
import img3 from '../img/dj3.png'

const Djal = () => {
    return (
        <div className='hero'>
            <img className="logo" width="100%" height="100%" src={Bish} alt="" />

            <div className='content'>
                <h1>JALAL-ABAD</h1>
                <p>Located in Kyrgyzstan’s Western Tian- <br />Shan Mountains and Fergana Valley,<br /> Jalal-Abad region is a destination of <br/>superlatives -- the biggest wild walnut forest in the world at Arslanbob...</p>
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
export default Djal;