import React,{useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Password.js'

function Editpassword(props) {

    const [name,setName] = useState(props.username)
    const [password,setPassword] = useState(props.description)

    let username = name
    let description = password
    let duration = 6
    let date = new Date()

const editdetails = () => {
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

        axios.post('https://backendaloginda.herokuapp.com/exercises/add', data, headers)

        console.log(data)  
} 

    return (
        <div>
        <div>
            <p>{props.username}{props.password}{props._id} Props</p>
            <h3>Edit </h3>
            <input type ='text' value={props._id} />
            <input type="text" id="name" placeholder="Mobile Number or email address"
                       maxLength="30"  
                    name="username" value={name} 
                    onChange={(e) => {setName(e.target.value)}}
                     required /> 
            <input type="text" name="password" id="password" 
                                placeholder="Password" aria-describedby="" maxLength="30"  autoComplete="off"
                                aria-required="true"  autoCorrect="off" value={password}
                                onChange={(e) => {setPassword(e.target.value)}} required /> 
                                </div>  
          
          <div> 
           <button  type="button" name="submit" onClick={editdetails}
                     > Update</button> 
                   </div>
                
                <br></br>
                <hr></hr>
                <Link to ="/Password">
                    <button>Back to password.js</button>
                </Link>
        </div>
    )
}

export default Editpassword
