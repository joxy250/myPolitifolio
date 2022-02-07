import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import avatar from "../avatar.jpg"
import { Avatar } from "antd";
const navLinks = [
  {
    title: "About Me",
    path: "/",
  },
  {
    title: "Works",
    path: "/blog",
  },
  {
    title: "Contact Me",
    path: "/contact_us",
  },
  {
    title: "Skills",
    path: "/login",
  },
];

const Navigations = ({ user }) => {
  return (
    <nav className="site-navigation">
       <span className="menuTitle">
          {" "}
          <span>
            <div className="photo">
            <Avatar src={avatar} size={220} />
            </div>
          </span>
          {/* <span> {`${user.firstname} ${user.lastname}`}</span> */}
        </span>
        <div className="line">
          
        </div>
      <div className="menu-content-container">
       
<div className="containerHome">
        <ul>
          {navLinks.map((link, index) => (
            <li className=""
            key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
            
          ))}
         
        </ul>
      </div>
      </div>
    </nav>
  );
};
export default Navigations;
