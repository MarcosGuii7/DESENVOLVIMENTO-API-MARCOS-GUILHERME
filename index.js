const express = require ("express")
const app = express()

app.use(express.json())

app.post("/compra", (req, res) => {
    const nome = req.body.nome
    const preco = req.body.preco
    const quantidade = req.body.quantidade
    const total = preco * quantidade

    if (!produto || preco < 0) {
        res.send("Dados inválidos")
    } else {
    res.send("Nome do Produto: " + nome + ", Valor total da compra: " + total)
    }
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})