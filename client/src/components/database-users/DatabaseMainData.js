//import Defunkt from "../../database/defunkt.json"
import axios from "axios"
import React, { useEffect, useState } from 'react'


export default function DatabaseMainData(){
    const [userId, setUserId] = useState('')
    const [userLogin, setUserLogin] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [userURL, setUserURL] = useState('')
    const [userFullname, setUserFullname] = useState('')

    const [selectData, setSelectData] = useState([]);

    useEffect(() => {
        let processing = true
        axiosFetchData(processing)
        return() => {
            processing = false
        }
    },[])

    const axiosFetchData = async(processing) => {
        await axios.get('http://localhost:4000/users')
        .then(res => {
            if(processing){
                setSelectData(res.data);
            }
        }).catch(err => console.log(err))
    }
    const axiosPostData = async() => {
        const postData = {
            id: userId,
            login: userLogin,
            avatar_url: userAvatar,
            url: userURL,
            name: userFullname
        }
        await axios.post('http://localhost:4000/insertUser', postData) // ovo znaci da postamo na ovaj URL! u router.js!
        //.then( moze ic response success)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
            //dodat provjeru je li forma prazna
        axiosPostData()
    }

    return(
           //testna forma za database
           //umisto ovoga, dodat tablicu di ce bit prikazani svi iz baze useri, nakon klika na usera triba se otvorit modal forma
            <>
        <h1>Insert a new User</h1>

        <form className="insertForm">
            <label>ID</label><br />
            <input type="text" id="userId" name="userId" value={userId} onChange={(e) => setUserId(e.target.value)}/>
            <br />
            
            <label>Login</label><br />
            <input type="text" id="userLogin" name="userLogin" value={userLogin} onChange={(e) => setUserLogin(e.target.value)}/>
            <br />
            
            <label>Avatar URL</label><br />
            <input type="text" id="userAvatar" name="userAvatar" value={userAvatar} onChange={(e) => setUserAvatar(e.target.value)}/>
            <br />
            
            <label>URL</label><br />
            <input type="text" id="userURL" name="userURL" value={userURL} onChange={(e) => setUserURL(e.target.value)}/>
            <br />
            
            <label>Name</label><br />
            <input type="text" id="userFullname" name="userFullname" value={userFullname} onChange={(e) => setUserFullname(e.target.value)}/>
            <br />

            <button type="submit" onClick={handleSubmit}>Submit</button>
            <br />
        </form>
        </>
        )
}