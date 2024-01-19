import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
function BackButton(/*{destination ='/'} Can pass the link like this also*/ ) {
  return (
    <div>
      <Link to="/">
        <button className="btn btn-success mx-2 my-2" style={{fontSize:"35px", width:"75px", height:"60px", paddingBottom:"65px"}}>

        <BsArrowLeft/>
        </button>
      </Link>
    </div>
  )
}

export default BackButton
