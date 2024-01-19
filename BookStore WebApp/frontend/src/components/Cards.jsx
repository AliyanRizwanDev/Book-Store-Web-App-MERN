import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox,MdOutlineDelete } from "react-icons/md";
function Cards(props) {
  return (
    
    
    <div className="card dropShadow" style={{ width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Book No. {props.index}</h5>
        <h5 className="card-title"><b>{props.title}</b></h5>
        <p className="card-text">
          <h6>Author: {props.author}</h6>
          <h6>Publish Year: {props.PY}</h6>
        </p>
        <Link to={`/books/details/${props.id}`}><div className="btn btn-success mx-2" style={{fontSize:"20px" , paddingBottom:"10px"}}><BsInfoCircle/></div></Link>
        <Link to={`/books/edit/${props.id}`}><div className="btn btn-success mx-2" style={{fontSize:"20px" , paddingBottom:"10px"}}><AiOutlineEdit/></div></Link>
        <Link to={`/books/delete/${props.id}`}><div className="btn btn-success mx-2" style={{fontSize:"20px" , paddingBottom:"10px"}}><MdOutlineDelete/></div></Link>
      </div>
    </div>


  )
}

export default Cards
