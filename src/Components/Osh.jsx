import React from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import osh from '../img/osh.png'

import Carousel from 'react-elastic-carousel';
import Intersect from '../img/OSH1.png'
import img2 from '../img/OSH2.png'
import img3 from '../img/OSH3.png'

const Osh = () => {
    return (
        <div className='hero'>
            <img className="logo" width="100%" height="100%" src={osh} alt="" />



            <div className='content'>
                <h1>OSH</h1>
                <p>Osh is the second-largest city <br />in Kyrgyzstan,located in the Fergana <br /> Valley in the south of the country and <br />often referred to as the "capital of the south".</p>
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
export default Osh;