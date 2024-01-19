import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar("Error Happend", { variant: "error" });

        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <BackButton />
      <h1 className="text-center" style={{ marginBottom: "30px" }}>
        Delete Book
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="display">
          <div className="text-center">
            <p>ID: {book._id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Publish Year: {book.publishYear}</p>
            <p>Create Time: {new Date(book.createdAt).toString()}</p>
            <p>Last Updated Time: {new Date(book.updatedAt).toString()}</p>
          </div>
          <center>
          <h2>Are you sure to delete this data?</h2>
            <button className="btn btn-danger sub" onClick={handleDeleteBook}>
              Delete
            </button>
          </center>
        </div>
      )}
    </div>
  );
}

export default DeleteBook;
