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

app.use(express.urlencoded({ extends: true }))

//conectando com o mongoose
//mongoose.set("useFindAndModify", false)

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('Conectado com o banco')
    // definindo o numero da porta do servidor local
    app.listen(process.env.PORT || 3000, () => {
        console.log('Servidor funcionando!')
    })
    
})

// configuração da views
app.set("view engine", "ejs")


//metodo get ou metodo ler
app.get('/', (req, res) => {
    TodoTask.find({}, (err, tasks) => {
        res.render("todo.ejs", { todoTasks: tasks })
    })

})

//metodo post onde salva o arquivo
app.post('/', async (req, res) => {

    const todoTask = new TodoTask({
        content: req.body.content
    })
    try {
        await todoTask.save();
        res.redirect('/')
    } catch (error) {
        res.redirect('/')
    }

})

//metodo editar
app.route('/edit/:id').get((req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
        res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
    })
}).post((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});


// metodo deletar
app.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});
