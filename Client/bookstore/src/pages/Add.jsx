import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
export const Add = () => {
  const [book, setBook] = useState({
    title:"",
    descripton:"",
    price: null,
    cover:""
  });

  const navigate = useNavigate();

  const handleChange =(event) =>{
    setBook((prev)=>({...prev, [event.target.name]: event.target.value }))
  }

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/books",book);
      navigate("/");
    }catch(err){
      console.log(err)
    }
  }
  


  return (
    <div className='Add'>
      <div className="Add__container">
        <form action="">
          <h1>Add new book</h1>
          <input type="text" placeholder='title'name='title' onChange={handleChange}/>
          <input type="text" placeholder='descripton' name='descripton'onChange={handleChange} />
          <input type="number" placeholder='price' name='price' onChange={handleChange}/>
          <input type="text" placeholder='cover' name='cover' onChange={handleChange}/> 
          <button onClick={handleClick}>
            Add
          </button>
        </form>
      </div>
    </div>
  )
}
