import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faUserInjured, faVideo, faTooth, faGlasses, faPiggyBank, faUserTag } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames';
import './style.css'

function Buttons(props) {
  return (
    <div className="buttonBox">
     <div className="row">
      <div className="row text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 text-center">
              <button type="button" id="btn" className="btn btn-primary">
                <FontAwesomeIcon icon={props.icon} />
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
