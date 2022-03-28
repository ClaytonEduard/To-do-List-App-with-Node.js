// iniciando o servidor
const express = require('express');
const app = express();

//definindo css
app.use("/static", express.static("public"));

app.use(express.urlencoded({extends:true}))

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

// definindo o numero da porta do servidor
app.listen(8081, () => {
    console.log('Servidor funcionando!')
})