import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import axios from "axios";

const UserModalData = (user) => {

    const [userId] = useState(user.id);
    const [userAvatar] = useState(user.avatar_url);
    const [userLogin, setUserLogin] = useState(user.login);
    const [userURL, setUserURL] = useState(user.html_url);


    const handleUserLoginChange = (e) => {
        setUserLogin(e.target.value);
    }

    const handleUserURLChange = (e) => {
        setUserURL(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:4000/updateUser/${user._id}`, { //ObjectId [MongoDB]
            login: userLogin,
            html_url: userURL
        })
        window.location.reload();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="modal-header">
                    <img src={userAvatar} alt="" id='avatar-user-modal' />
                    <br />
                    <h1 id="modal-username">{userLogin}</h1>

                    <span id="modal-id">ID: {userId}</span><br />
                </div>

                <div className="modal-container">
                    <span className="modal-span">Username</span>
                    <input type="text" className="modal-input" value={userLogin} onChange={handleUserLoginChange} />
                    <br />

                    <span className="modal-span">URL</span>
                    <input type="text" className="modal-input" value={userURL} onChange={handleUserURLChange} />
                    <br /><br />

                    <button id="modal-save-btn" type="submit"><SaveIcon />Update</button>
                </div>
            </form>
        </>
    )
}

export default UserModalData;