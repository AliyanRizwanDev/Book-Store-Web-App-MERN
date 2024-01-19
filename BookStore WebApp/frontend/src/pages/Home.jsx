import React, { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { useEffect } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
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
          <div className="container">
            <h1 className="text-center mt-5">
              <u>
                <b>Book List</b>
              </u>
            </h1>

            <div className="text-center" style={{ margin: "30px" }}>
              <Link to="/books/create">
                <div
                  className="btn btn-success"
                  style={{ fontSize: "20px", paddingBottom: "10px" }}
                >
                  <MdOutlineAddBox />
                </div>
              </Link>
            </div>
            <div className="row">
              {books.map((book, index) => (
                <div
                  key={book._id}
                  className="col-4 my-3 d-flex justify-content-evenly text-center"
                >
                  <Cards
                    id={book._id}
                    title={book.title}
                    index={index + 1}
                    author={book.author}
                    PY={book.publishYear}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
