import React, { useEffect, useState } from 'react'
import { APIMainButtons } from './APIMainButtons';

import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';

function APIMainData() {
    const [records, setRecords] = useState([]);
    const API_URL = "https://api.github.com/users";
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <>
        <div className="main-header">
            <div class ="main-header-search">
                <input type="text" id="search-input" placeholder="Live search.." />
            </div>

            <div class = "main-header-buttons">
            {
                APIMainButtons.map((value) =>{
                    return(
                        <div className="icon" onClick={() => {window.location.pathname = value.link}}>{value.icon}</div>
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
                    <th>JSON</th>
                    <th>Database</th>
                </tr>
            </thead>
            <tbody>
                {records.map((record, i) => (
                    <tr key={i}>
                        <td>{record.id}</td>
                        <td><img src={record.avatar_url} alt="" id='avatar-user'/></td>
                        <td>{record.login}</td>
                        <td><a href={record.html_url} target='blank'>{record.html_url}</a></td>
                        <td>{record.type}</td>
                        <td>
                             <DownloadIcon type="button" id='json-download-btn' 
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
                        }} />
                        </td>
                        <td>
                            <SaveIcon type="button" id="save-to-database-btn"
                            // onClick={alert(record.login) + 'download not implemented yet!'}
                        /></td>
                    </tr>   
                ))}
            </tbody>
        </table>
        </div>

        <div className='main-info'>

        </div>
    </>
  )
}

export default APIMainData
