import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import './style.css'

function Buttons(props) {
  return (
    <div className="buttonBox">
      <div className="row">
        <div className="row text-center">
          <div className="container1">
            <div className="row">
              <div className="col-sm-4 text-center">
                <button type="button" id={props.id} className="btn btn-primary" onClick={props.changeVideo}>
                  <FontAwesomeIcon icon={ faVideo } />
                </button>
              </div>
              <div className="col-sm-8 text-left">   
                <p>{props.english}</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Buttons;
