import React from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Bishkek from '../img/naryn.png'
import Carousel from 'react-elastic-carousel';
import Intersect from '../img/n1.png'
import img2 from '../img/n2.png'
import img3 from '../img/n3.png'

const Naryn = () => {
    return (
        <div className='hero'>
            <img className="logo" width="100%" height="100%" src={Bishkek} alt="" />

            <div className='content'>
                <h1>Naryn</h1>
                <p>Naryn is the regional administrative <br />center of Naryn Region in central  <br /> Kyrgyzstan. Its area is 84 square kilometres <br /> </p>
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
export default Naryn;