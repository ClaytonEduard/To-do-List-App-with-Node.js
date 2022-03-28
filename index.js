// iniciando o servidor
const express = require('express');
const app = express();

//definindo css
app.use("/static", express.static("public"))


//rota
app.get('/', (req, res) => {
    res.render("todo.ejs")
})

app.set("view engine", "ejs")

// definindo o numero da porta do servidor
app.listen(8081, () => {
    console.log('Servidor funcionando!')
})