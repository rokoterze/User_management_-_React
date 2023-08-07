import React, { useEffect, useState } from 'react'
import { APIMainButtons } from './APIMainButtons';
import axios from 'axios';

import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';

function APIMainData() {
    const [users, setUsers] = useState([]);
    const API_URL = "https://api.github.com/users";

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <>
        <div className="main-header">
            <div className ="main-header-search">
                <input type="text" id="search-input" placeholder="Live search.." />
            </div>

            <div className = "main-header-buttons">
            {
                APIMainButtons.map((value, key) =>{
                    return(
                        <div 
                        className="buttonIcon"
                        key={key} 
                        onClick={() => {window.location.pathname = value.link}}>{value.icon}</div>
                    )
                })
            }
            </div>
        </div>

        <div id="main-table">
        <table id='main-table-fetch'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Username</th>
                    <th>Link</th>
                    <th>Type</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((record, key) => (
                    <tr key={key}>
                        <td className='idTd'>{record.id}</td>
                        <td className='avatarTd'><img src={record.avatar_url} alt="" id='avatar-user'/></td>
                        <td className='loginTd'>{record.login}</td>
                        <td className='linkTd'><a href={record.html_url} target='blank' className='link'>{record.html_url}</a></td>
                        <td>{record.type}</td>

                        <td className='downloadTd'>
                            <button id='json-download-btn' 
                            onClick={() => {
                                const USER_URL = 'https://api.github.com/users/' + record.login;
                                const filename = record.login + '.json';

                                fetch(USER_URL)
                                .then(res => res.blob())
                                .then(blob => {
                                    const link = document.createElement("a");
                                    link.href = URL.createObjectURL(blob);
                                    link.download = filename;
                                    link.click();
                                }).catch(console.error);
                            }}>
                                <DownloadIcon/> Download
                            </button>
                        </td>

                        <td> 
                            <button id='save-to-database-btn'
                            onClick={() => {
                                const USER_URL = 'https://api.github.com/users/' + record.login;
                                fetch(USER_URL)
                                .then(async() => {
                                    const postData = {
                                        id: record.id,
                                        login: record.login,
                                        avatar_url: record.avatar_url,
                                        url: record.url,
                                        name: record.name
                                    }
                                    await axios.post('http://localhost:4000/insertUser', postData)
                                })
                            }}>
                                <SaveIcon/> Add to DB
                            </button>
                        </td>
                    </tr>   
                ))}
            </tbody>
        </table>
        </div>

        <div className='main-info'>
            <span><footer>&copy; Roko Terze - Skriptni programski jezici - ASPIRA</footer></span>
        </div>
    </>
  )
}

export default APIMainData
