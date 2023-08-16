import React from 'react'
import '../UserModal.css'

import CloseIcon from '@mui/icons-material/Close';

function AddUserModal(props) {
  return (props.trigger) ? (
    <div className='modal'>
      <div className="modal-inner">
        <h3 className='modal-title'>Create User</h3>
        <CloseIcon className="close-btn" onClick={() => props.setTrigger(false)} />
        {props.children}
      </div>
    </div>
  ) : "";
}

export default AddUserModal