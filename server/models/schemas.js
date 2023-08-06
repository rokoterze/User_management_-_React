const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        id: {type: String},
        login:{type: String},
        avatar_url: {type: String},
        url: {type: String},
        name: {type: String},
        entryDate: {type:Date, default:Date.now}
    }
)

const Users = mongoose.model('Users', userSchema, 'users'); //users -> table name

const mySchemas = {'Users':Users}

module.exports = mySchemas;