import React from "react";
import Navigations from "./compnent/Navigations";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
// import pageRenderer from './page-renderer'
import Routes from "./routes";

function App() {
  const user = {
    firstname: "Josiane",
    lastname: "NYIRARUKUNDO",
  };
  return (
    <Router>
      <div className="App">
        <Navigations user={user} />
        <Routes />
        {/* <Switch>
        <Route path="/:page" component={pageRenderer}/>
        <Route path="/" render={()=> <Redirect to="/home"/>}/>
      <route component={()=>404}/>  
      </Switch> */}
      </div>
    </Router>
  );
}

export default App;
