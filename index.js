// iniciando o servidor
const express =  require('express');
const app = express();




// definindo o numero da porta do servidor
app.listen(8081, ()=>{
    console.log('Servidor funcionando!')
})