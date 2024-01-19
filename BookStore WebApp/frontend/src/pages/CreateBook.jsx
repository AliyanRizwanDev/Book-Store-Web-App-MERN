import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useSnackbar } from "notistack";
import Navbar from "../components/Navbar";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <BackButton />

      <h1 className="text-center head">Create Book</h1>
      {loading ? <Spinner /> : ""}

      <div className="form">
        <div className="mb-3">
          <label HtmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
            style={{ border: "1px solid black" }}
          />
        </div>
        <div className="mb-3">
          <label HtmlFor="exampleInputPassword1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            value={author}
            style={{ border: "1px solid black" }}
          />
        </div>
        <div className="mb-3">
          <label HtmlFor="exampleInputPassword1" className="form-label">
            Publish Year
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => {
              setPublishYear(event.target.value);
            }}
            value={publishYear}
            style={{ border: "1px solid black" }}
          />
        </div>
        <button className="btn btn-success sub" onClick={handleSaveBook}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
