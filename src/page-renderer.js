// import React from "react";
// import {generatePath, useRouteMatch} from 'react-router-dom'

// const generatePage = page => {
   
//     try{
//         const Component = require(`./pages/${page}`).default
//         return <Component/>
//     }
//     catch(err){
//         console.warn(err)
//         return 
//     }
// }
// const PageRenderer=()=>{
//     const{
//         params:{page}
//     }
//     =useRouteMatch()
//     return generatePage(page)
// }
// export default PageRenderer;