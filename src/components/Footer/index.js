import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className='text-center fixed-bottom bg-dark'>
      <div className='card-footer'>
        <small className='text-white mx-auto'>
          &copy; React Employee Directory
        </small>
      </div>
    </footer>
  );
}

export default Footer;
