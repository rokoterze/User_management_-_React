import React from 'react'
import './UserModal.css'

import CloseIcon from '@mui/icons-material/Close';

function UserModal(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <CloseIcon className="close-btn" onClick={() => props.setTrigger(false)}/>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default UserModal