import React from "react";
import {Navigate, Route, Routes} from "react-router-dom"
import HomePage from "./Components/HomePage"
import Osh from "./Components/Osh"
import Batken from "./Components/Batken"
import Chui from "./Components/Chui"
import Issuk from "./Components/Issuk"
import Naryn from "./Components/Naryn"
import Djal from "./Components/Djal"
import Talas from "./Components/Talas"

const Routing = () =>{
    return(
        <Routes>
        <Route path='/' element={<><HomePage/></>}/>
        <Route path="/osh" element={<><Osh/></>}/>
        <Route path="/batken" element={<><Batken/></>}/>
        <Route path="/chui" element={<><Chui/></>}/>
        <Route path="/issuk" element={<><Issuk/></>}/>
        <Route path="/naryn" element={<><Naryn/></>}/>
        <Route path="/djal" element={<><Djal/></>}/>
        <Route path="/talas" element={<><Talas/></>}/>

       </Routes>
    );
  
};
export default Routing;