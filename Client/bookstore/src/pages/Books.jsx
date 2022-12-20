import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) =>{
    try{
        await axios.delete("http://localhost:8800/books/"+id)
        window.location.reload();
    }catch(err){
        console.log("aquiiiiiiii")
    }
  }

  return (
    <div className="Books">
      <div className="Books__container">
        {books.map((book) => (
          <div className="Books__book-container" key={book.id}>
            {book.cover && <img src={book.cover} alt={book.title} />}
            <h2>{book.title}</h2>
            <p>{book.descripton}</p>
            <span>{book.price}</span>
            <div className="Books__button-container">
                <button><Link to={`/update/${book.id}`}>Update</Link></button>
                <button onClick={()=>handleDelete(book.id)}>Delete</button>
            </div>
          </div>
        ))}
        <div className="Books__addnew">
          <button>
            <Link to="/add"> Add new Book</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
