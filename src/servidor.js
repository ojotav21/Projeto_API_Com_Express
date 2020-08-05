const porta = 3003 // definindo porta pro projeto
const express = require('express') //importanto Express
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
const app = express()
// app.get('/produtos', (req, res, next) => {
//    console.log('Middleware 1...') //será converido para JSON automatícamente
//     next()
// })
// //app.use serve pra toda url


app.use(bodyParser.urlencoded({extended: true}))  //transforma o corpo da requisição em OBJ

// Linha13: Para qualquer requisição que será eita no server, ela passará por esse middleware;
//e nela ter o padrão urlencoded, terá um parse que o transformará em um objeto acessivél

//retorna ma função middlware. que fará um Parse na body


app.get('/produtos', (req, res, next) => {
    //função middleware
    //.send = envia uma resposta
    res.send(bancoDeDados.getProdutos()) //será converido para JSON automatícamente
})

app.get('/produtos/:id', (req, res, next)=>{
    //parametro nas requisições
    res.send(bancoDeDados.getProduto(req.params.id)) //req.params são os parametros da request
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        //POST, envia dados, que estão no corpo da requisição
        nome: req.body.nome,
        preco: req.body.preco

    })
    res.send(produto) //Gera JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Gera JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deletaProdutos(req.params.id)
    res.send(produto) //Gera JSON
})


app.listen(porta, () => {
    console.log(`Nosso servidor está na Porta ${porta}.`)
}) //app.LISTEN = ouça, callback só para mostrar o console