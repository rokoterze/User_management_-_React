import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';

const AddUserModalData = () => {

    const images = [
        { url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png', alt: 'Image 1' },
        { url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b3053232163929.567197ac6e6f5.png', alt: 'Image 2' },
        { url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png', alt: 'Image 3' }
    ]

    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };


    //User Avatar
    const [userAvatar, setUserAvatar] = useState('');
    const handleUserAvatarChange = (e) => {
        setUserAvatar(e.target.url);
    }
    
    //User ID
    const [userId, setUserId] = useState('');
    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    }

    //User Login (Username)
    const [userLogin, setUserLogin] = useState('');
    const handleUserLoginChange = (e) => {
        setUserLogin(e.target.value);
    }

    //User URL
    const [userURL, setUserURL] = useState('');
    const handleUserURLChange = (e) => {
        setUserURL(e.target.value);
    }

    //Form handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            id: userId,
            login: userLogin,
            avatar_url: userAvatar,
            html_url: userURL
        }

        await axios.post('http://localhost:4000/insertUser', postData)

        window.location.reload();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="modal-header-select">
                    <ArrowBackIosIcon className='select-btn left' onMouseDown={handlePrev} />
                    <img src={images[currentImage].url} alt={images[currentImage].alt} id='avatar-user-modal' onChange={handleUserAvatarChange}/>
                    <ArrowForwardIosIcon className='select-btn right' onMouseDown={handleNext} />
                    <br />
                </div>

                <div className="modal-container">
                    <span className="modal-span">Identification</span>
                    <input type="text" className="modal-input modal-input-id" onChange={handleUserIdChange} />
                    <br />

                    <span className="modal-span">Username</span>
                    <input type="text" className="modal-input" onChange={handleUserLoginChange} />
                    <br />

                    <span className="modal-span">Profile URL</span>
                    <input type="text" className="modal-input" onChange={handleUserURLChange} />
                    <br /><br />

                    <button id="modal-save-btn" type="submit">Save</button>
                </div>
            </form>
        </>
    )
}

export default AddUserModalData;