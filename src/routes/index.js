import React from 'react';
import{Routes,Route,} from "react-router-dom" ;
import Home from "../views/AboutMe";
import Blog from "../views/Works";
import Login from "../views/Login";
import ContactUs from '../views/ContactMe';

const Index = ( )=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/contact_us" element={<ContactUs/>}></Route>
            </Routes>
        </>
    )
}
export default Index;