// iniciando o servidor
const express = require('express');
const app = express();
const mongoose = require('mongoose')

//conectando com o server online
const dotenv = require('dotenv')
dotenv.config()


//definindo css
app.use("/static", express.static("public"));

app.use(express.urlencoded({extends:true}))

//conectando com o mongoose
mongoose.connect(process.env.DB_CONNECT,{userNewUrlParser:true},()=>{
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

//metodo post
app.post('/',(req,res)=>{
    console.log(req.body);
})