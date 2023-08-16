const express = require('express');
const router = express.Router();
const schemas = require('../models/schemas');

router.post('/insertUser', async (req, res) => {
  try {
    const { id, avatar_url, login, html_url } = req.body;

    const userData = { id: id, avatar_url: avatar_url, login: login, html_url: html_url };

    const newUser = new schemas.Users(userData);

    const saveUser = await newUser.save();

    if (saveUser) {
      res.status(200).json(newUser);
    }

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

  res.end();
})

router.get('/getUsers', async (req, res) => {
  try {
    const users = schemas.Users;

    const userData = await users.find({}).exec();

    if (userData) {
      res.status(200).json(userData);
    }

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

  res.end();
})

router.put('/updateUser/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const updateUser = await schemas.Users.findByIdAndUpdate(id, req.body);

    if (!updateUser) {
      return res.status(404).json({ message: `Cannot find user with ID: ${id}` });
    }

    const updatedUser = await schemas.Users.findById(id);
    res.status(200).json(updatedUser);

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
  res.end();
})

router.delete(`/deleteUser/:id`, async (req, res) => {

  try {
    const { id } = req.params;
    const deletedUser = await schemas.Users.deleteOne({ id });
    if (deletedUser) {
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
  res.end();
});

module.exports = router;