//criando as dependecias do banco
const mongoose = require('mongoose');

//definindo o nome conjunto que será criando no servidos
const todoTaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('TodoTask', todoTaskSchema);