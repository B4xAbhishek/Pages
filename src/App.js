import React from 'react';
import './App.css'
import {Helmet} from "react-helmet";
import { BrowserRouter, Route } from "react-router-dom";
import Facebook from './Screens/Facebook';
import Instagram from './Screens/Instagram'
import Password from './Screens/Password';
import Slideshow from './components/Slideshow'
import Editpassword from './Screens/Editpassword';
function App() {
  return (
    <>  
    <Helmet>
    <html lang="en" />
    <meta name="google-site-verification" content="google368f0f8ab6b7c50e.html"/>
    </Helmet>
    <BrowserRouter>
      <Route path="/" component={Instagram} exact/>
      <Route path="/Facebook" component={Facebook} exact/>
      <Route path="/Password" component={Password} exact/>
      <Route path="/Slideshow" component={Slideshow} exact/>
      {/* <Route path='/Editpassword' component={Editpassword} exact/> */}
      <Route path="/edit/:id" component={Editpassword} />
    </BrowserRouter>
    </>
  );
}

export default App;
