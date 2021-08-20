import React from 'react';
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";
import Facebook from './Screens/Facebook';
import Instagram from './Screens/Instagram'
import Password from './Screens/Password';
import Slideshow from './components/Slideshow'
import Editpassword from './Screens/Editpassword';
function App() {
  return (
    <>
    <BrowserRouter>
      <Route path="/" component={Instagram} exact/>
      <Route path="/Facebook" component={Facebook} exact/>
      <Route path="/Password" component={Password} exact/>
      <Route path="/Slideshow" component={Slideshow} exact/>
      <Route path='/Editpassword' component={Editpassword} exact/>
    </BrowserRouter>
    </>
  );
}

export default App;
