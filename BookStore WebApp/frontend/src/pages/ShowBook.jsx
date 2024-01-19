import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import "../App.css";
import Navbar from "../components/Navbar";
function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <BackButton />
          <h1 className="text-center my-3">Book Details</h1>
          <div className="display">
            <p>ID: {book._id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Publish Year: {book.publishYear}</p>
            <p>Create Time: {new Date(book.createdAt).toString()}</p>
            <p>Last Updated Time: {new Date(book.updatedAt).toString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
