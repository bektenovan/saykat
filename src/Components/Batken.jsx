import React from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import osh from '../img/Batken.png'

import Carousel from 'react-elastic-carousel';
import Intersect from '../img/batken1.png'
import img2 from '../img/batken2.png'
import img3 from '../img/batken3.png'

const Batken = () => {
    return (
        <div className='hero'>
            <img className="logo" width="100%" height="100%" src={osh} alt="" />



            <div className='content'>
                <h1>BATKEN</h1>
                <p>Batken is a town in southwestern <br />Kyrgyzstan, on the southern fringe of <br /> the Fergana Valley. It is the  <br /> administrative seat of Batken Region</p>
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
export default Batken;