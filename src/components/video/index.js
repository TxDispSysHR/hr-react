import React from "react";
import "./style.css";

function videoBox(props) {
  return (
    <div align="center" id="video-box">
      <iframe width="800" height="315" src= {props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myFrame"></iframe>
    </div>
  )
};

export default videoBox;
