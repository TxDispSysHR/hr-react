import React from "react";
import "./style.css";

function videoBox(props) {
  return (
    <div align="center" id="video-box">
      <iframe width="640" height="480" src={props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  )
}

export default videoBox;