const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id: {type: String},
        avatar_url: {type: String},
        login: {type: String},
        html_url: {type: String}
    }
)

const Users = mongoose.model('Users', userSchema, 'users'); 
const mySchemas = {'Users':Users}

module.exports = mySchemas;

