import React from "react"
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import { color } from "@mui/system";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Navbar = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className="nav-menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/osh'>Services</Link>
                    </li>
                    <li>
                        <Link to='/batken'>Places</Link>
                    </li>
                    <li>
                        <Link to='/chui'>About</Link>
                    </li>
                    <li>
                        <Link to='/issuk'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/naryn'>Map</Link>
                    </li>

                    <li className="icons">
                        <Link to="/djal" >

                            <SearchIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="/talas" >

                            <AccountCircle />
                        </Link>
                    </li>

                </ul>

            </div>

        </div>
    );
};
export default Navbar;