import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Title() {
  return (
    <div align="right">
      <Link to="/english"><button type="button" id="btn" className="btn btn-primary">English</button></Link>
    </div>
  );
}

export default Title