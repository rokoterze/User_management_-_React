const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas');

router.post('/insertUser', async (req, res) => {
    const { id, avatar_url, login, html_url } = req.body;

    const userData = { id: id, avatar_url: avatar_url, login: login, html_url: html_url };

    const newUser = new schemas.Users(userData);

    const saveUser = await newUser.save();

    if (saveUser) {
        console.log(newUser);
    }
    res.end();
})

router.get('/getUsers', async (req, res) => { 
    const users = schemas.Users;

    const userData = await users.find({}).exec();

    if (userData) {
        res.send(JSON.stringify(userData));
    }
    res.end();
})

module.exports = router;