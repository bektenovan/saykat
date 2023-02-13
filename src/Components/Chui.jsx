import React from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import osh from '../img/chui.png'

import Carousel from 'react-elastic-carousel';
import Intersect from '../img/chui1.png'
import img2 from '../img/chui2.png'
import img3 from '../img/chui3.png'

const Chui = () => {
    return (
        <div className='hero'>
            <img className="logo" width="100%" height="100%" src={osh} alt="" />



            <div className='content'>
                <h1>CHUI</h1>
                <p>Chuy region is located on the north of <br />Kyrgyzstan and it is considered the <br /> most developed region of the country.  <br /> Bishkek, the capital of the country, is situated here...</p>
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
export default Chui;