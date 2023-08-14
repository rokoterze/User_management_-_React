import React, { useState, useEffect } from "react";
import axios from "axios";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DatabaseMainData = () => {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/getUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.login.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <>
      <div className="main-header">
        <div className="main-header-search">
          <input type="text" id="search-input" placeholder="Live search by Username.." onChange={(event) => setFilterText(event.target.value)} />
        </div>
      </div>
      
      <div id="main-table">
        <table id='main-table-fetch'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Profile Link</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, key) => (
              <tr key={key}>
                <td className='idTd'>{user.id}</td>
                <td className='avatarTd'><img src={user.avatar_url} alt="" id='avatar-user' /></td>
                <td className='loginTd'>{user.login}</td>
                <td className='linkTd'><a href={user.html_url} target='blank' className='link'>{user.html_url}</a></td>
                <td><EditIcon /></td>
                <td><DeleteIcon
                onClick={() => {}} 
                /></td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DatabaseMainData;