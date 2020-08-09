import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Landing from './components/Landing'; 
import AboutMe from './components/pages/AboutMe';
import AboutSite from './components/pages/AboutSite'; 

function App() {
  return (
<Router>
  <div className="App">
    <Route exact path="/" render={props =>(
      <React.Fragment>
        <Landing/>
      </React.Fragment>
    )}/>
  </div>

  <Route exact path="/AboutMe" component={AboutMe}/>
  <Route exact path="/AboutSite" component={AboutSite}/>

</Router>


);
}

export default App;
