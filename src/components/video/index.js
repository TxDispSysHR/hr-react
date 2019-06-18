import React from "react";
import "./style.css";

function videoBox(props) {
  return (
    <div align="center" id="video-box">
      <iframe width="800" height="315" src= {props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="myFrame"></iframe>
    </div>
  )
};

export default videoBox;
