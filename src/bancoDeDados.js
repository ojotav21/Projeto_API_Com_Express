const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto){
    // se o id do produto não estiver setado, passa o id
    if(!produto.id) produto.id = sequence.id
    //objeto produtos com chave produto.id, e substituiu/atualiza

    produtos[produto.id] = produto //esse produto já terá o id dentro dele.
    //OBJETO [chave] = valor
    return produto
    //ja tem  o id o produto retornado.
}

function getProduto (id) {
    //retorna produto com o id tal, se não tier, retora um objeto vazio
    return produtos[id] || {}
}

function getProdutos () {
    //retorna todos os valores do obj produtos.
    //cahve:valor
    return Object.values(produtos)
}

function deletaProdutos (id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}



module.exports = {salvarProduto, getProduto, getProdutos, deletaProdutos} //exportando as funções