// iniciando o servidor
const express = require('express');
const app = express();
const mongoose = require('mongoose')

//conectando com o server online
const dotenv = require('dotenv')

//definindo o models
const TodoTask = require('./models/TodoTask')

dotenv.config()

//definindo css
app.use("/static", express.static("public"));

app.use(express.urlencoded({extends:true}))

//conectando com o mongoose
//mongoose.set("useFindAndModify", false)
let DB_CONNECT = "mongodb+srv://Chaves:zmHhA0Fodrb0GUEJ@banco.lduww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECT,{useNewUrlParser:true},()=>{
    console.log('Conectado com o banco')
    // definindo o numero da porta do servidor local
    app.listen(8081, () => {
        console.log('Servidor funcionando!')
    })
})

// configuração da views
app.set("view engine", "ejs")


//rota
app.get('/', (req, res) => {
    res.render("todo.ejs")
})

//metodo post onde salva o arquivo
app.post('/',async(req,res)=>{

    const todoTask = new TodoTask({
        content:req.body.content
    })
    try {
        await todoTask.save();
        res.redirect('/')
    } catch (error) {
        res.redirect('/')
    }
  
})
