import React from "react";
import "./routes.scss";
import { BsTwitter,BsLinkedin,BsGithub ,BsEnvelope} from "react-icons/bs";
const Home = () => {
  return (
    <div className="home">
      <ul className="nobull">
      <li> I am Josiane NYIRARUKUNDO Experienced Database Administrator</li>
      <li> based in Kigali</li>
      <li> I use specialized software to store and organize data,I love to design database</li>
     <li> and configuration as well as backup and data recovery.</li> 
       </ul>
     <div className="icon">
     <BsTwitter/>  <BsLinkedin/>  <BsGithub/> <BsEnvelope/>
       </div>
    </div>
   );
      
   
  
};
export default Home;
