// External dependencies
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {type: String},
    completed: {type: Boolean, default: false},
    created_by: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Todo', todoSchema);