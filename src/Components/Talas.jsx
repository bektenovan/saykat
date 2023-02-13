import React from "react";
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import talas from '../img/talas.png'
import Carousel from 'react-elastic-carousel';
import Intersect from '../img/t2.png'
import img2 from '../img/t3.png'
import img3 from '../img/t4.png'



const Talas = () => {
    return (
        <div className='hero'>
            <img className="logo" width="100%" height="100%" src={talas} alt="" />

            <div className='content'>
                <h1>TALAS</h1>
                <p>Talas oblast situated in the northeast <br />part of the country at the border with <br /> Kazakhstan. Talas is a land of Manas <br />hero, “golden cradle of the nation”, as locals say.</p>
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
export default Talas;