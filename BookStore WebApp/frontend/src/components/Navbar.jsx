import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-success' style={{ height: "50px", display: "flex", justifyContent: "space-between" }}>
      <Link to="/" style={{textDecoration:"none"}}>
      <h1 className='mx-2 ' style={{ fontWeight: "bold" , color:"white"}}>BOOK STORE</h1>
      </Link>
      <h4 className='mx-2' style={{ fontWeight: "bold", marginTop:"10px", color:"white"}}><em>"Effortless Book Management, Elevated Experience"</em></h4>
    </div>
  );
}

export default Navbar;
