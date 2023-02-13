import React from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Bishkek from '../img/Bishkek.png'
import Carousel from 'react-elastic-carousel';
import Intersect from '../img/is1.png'
import img2 from '../img/iss2.png'
import img3 from '../img/iss3.png'

const Issuk = () => {
    return (
        <div className='hero'>
            <img className="logo" width="100%" height="100%" src={Bishkek} alt="" />

            <div className='content'>
                <h1>ISSYK-KUL</h1>
                <p>The pearl of the Tien Shan - Issyk-Kul is<br />the largest lake in Kyrgyzstan. Issyk- <br /> Kul translates as "hot lake". The water <br /> temperature here does not drop to minus even in winter...</p>
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
export default Issuk;