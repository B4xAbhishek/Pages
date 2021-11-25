import React, {useState,useEffect} from 'react'
import axios from 'axios'
import _ from 'lodash' // for the pagination
import {toast} from 'react-toastify' //for toast
import 'react-toastify/dist/ReactToastify.css'

//Module Import
import './Password.css'
import { Link } from "react-router-dom";

toast.configure()

const notify = (message) => {
  toast(message)
}
function Password(props) {

const [Products,setProducts] = useState([])
const[paginatedPosts,setpaginatedPosts] = useState([])
const[currentPage,setcurrentPage] = useState(1)

const pagesize = 10;

  useEffect(() => {
        const fetchProducts = async () => {
          const { data} = await axios.get(`https://backendaloginda.herokuapp.com/exercises`)
          setProducts(data)
          setpaginatedPosts(_(data).slice(0).take(pagesize).value())
          console.log(data)
        }
        fetchProducts()
        }, [])
   
        console.log('p-',paginatedPosts)

// Pagination 
const pageCount = Products? Math.ceil(Products.length/pagesize)+1 : 0;
console.log(pageCount)

const Pagination = (pageNo) => {
            setcurrentPage(pageNo)
            console.log(pageNo)
            let StartIndex = (pageNo-1)*10
            console.log(StartIndex)
            const Paginated = (_(Products).slice(StartIndex).take(pagesize).value())
            setpaginatedPosts(Paginated)
}

const deleteRecord = async (id,name) => {
    await axios.delete(`https://backendaloginda.herokuapp.com/exercises/${id}`)
    console.log(`${name} deleted successfully`)
    notify(`${name} deleted successfully`);
}

// pageCount
if (pageCount === 1) return null 
const pages = _.range(1, pageCount)


    return (
 <div className='cont'>
    <a href="/Facebook">Facebook</a>
    <a href="/"> Instagram</a>
    {/* Pagination */}
<nav aria-label="Page navigation example">
  <ul class="pagination">
{
  pages.map(page => 
    <li 
    className={page === currentPage ? 'page-item active' :'page-item'} >

      <p className = "page-link"
      onClick={() =>Pagination(page)}>
        {page}
      </p>
      </li>
  )
}
  </ul>
</nav>
 
<table>
  <thead>
  <tr>
    <th>Serial Number</th>
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
      <td>{(Products.indexOf(product) + 1)}</td>
      <td>{product.username}</td>
      <td>{product.description}</td>
      <td>{product.duration}</td>
      <td><p onClick={(e) => {deleteRecord(product._id,product.username)}} > Delete </p></td>
      <td>
      <Link to={"/edit/"+product._id}>Edit</Link>
    </td>
    <td>{product.date}</td>
    </tr>
    ).reverse()
  }
</table>
<hr></hr>
<p> Paginated Table </p>
{
    paginatedPosts.map((product, i) => 
    <tr key={i}>
      <td>{(Products.indexOf(product) + 1)}</td>
      <td>{product.username}</td>
      <td>{product.description}</td>
      <td>{product.duration}</td>
      <td><p onClick={(e) => {deleteRecord(product._id,product.username)}} > Delete </p></td>
      <td>
      <Link to={"/edit/"+product._id}>Edit</Link>
    </td>
    <td>{product.date}</td>
    </tr>
    ).reverse()
  }


</div>
    )
}

export default Password
