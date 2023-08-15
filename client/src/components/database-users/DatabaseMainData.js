import React, { useState, useEffect } from "react";
import axios from "axios";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UserModal from "./user-modal/UserModal";
import UserModalData from "./user-modal/UserModalData";

const DatabaseMainData = () => {
  const [users, setUsers] = useState([]);

  const [userModal, setUserModal] = useState(null);

  const [filterText, setFilterText] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, key) => (
              <tr key={key}>
                <td className='idTd'>{user.id}</td>
                <td className='avatarTd'><img src={user.avatar_url} alt="" id='avatar-user' /></td>
                <td className='loginTd'>{user.login}</td>
                <td className='linkTd'><a href={user.html_url} target='blank' className='link'>{user.html_url}</a></td>
                <td>
                  <button className="btn" id="open-profile-btn" onClick={() => {
                    setButtonPopup(true)
                    setUserModal(user)
                  }}><EditIcon />Open Profile</button>


                  <UserModal trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <UserModalData {...userModal} />
                  </UserModal>

                </td>
                <td>
                  <button className="btn" id="delete-profile-btn" onClick={async () => {
                    await axios.delete(`http://localhost:4000/deleteUser/${user.id}`);
                    window.location.reload();
                  }}><DeleteIcon /> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DatabaseMainData;