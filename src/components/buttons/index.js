import React from 'react'
import './style.css'

function Buttons(props) {
    return (
      <img
        onClick={() => props.findFriend(props.id)}
        className="image col-md"
        src={props.image}
        alt={props.id}
      />
    );
  }

export default Buttons;