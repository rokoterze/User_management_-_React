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