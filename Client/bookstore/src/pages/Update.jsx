import axios from 'axios';
import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
export const Update = () => {
  const [book, setBook] = useState({
    title:"",
    descripton:"",
    price: null,
    cover:""
  });

  const navigate = useNavigate();
  const location = useLocation();
  const ID = location.pathname.split("/")[2]

  const handleChange =(event) =>{
    setBook((prev)=>({...prev, [event.target.name]: event.target.value }))
  }

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.put(`http://localhost:8800/books/${ID}` ,book);
      navigate("/");
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='Update'>
      <div className="Update__container">
        <form action="">
          <h1>Update the book</h1>
          <input type="text" placeholder='title'name='title' onChange={handleChange}/>
          <input type="text" placeholder='descripton' name='descripton'onChange={handleChange} />
          <input type="number" placeholder='price' name='price' onChange={handleChange}/>
          <input type="text" placeholder='cover' name='cover' onChange={handleChange}/> 
          <button onClick={handleClick}>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
