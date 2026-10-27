const produtosModel = require(`../models/produtosModel`);

const listarProdutos = async (req, res) => {
    const produtos = await produtosModel.selecionarTodos();

    if(produtos.length === 0){
        return res.status(404).json({
            message: `Nenhum produto cadastrado`
        });
        
    }

    res.status(200).json({
        produtos
    });
}

const listarProdutosPorId = async (req, res) => {
    const id = req.params.id;
    const produto = await produtosModel.selecionarPorId(id);

    if(produto.length === 0){
        return res.status(404).json({
            message: `Produto não cadastrado`
        });
        
    }

    res.status(200).json({
        produto
    });
}

const listarProdutosPorCategoria = async (req, res) => {
    const categoria = req.params.categoria;
    const produto = await produtosModel.selecionarPorCategoria(categoria);

    if(produto.length === 0){
        return res.status(404).json({
            message: `Produto não encontrado para o filtro aplicado`
        });
        
    }

    res.status(200).json({
        produto
    });
}

const listarProdutosPorStatus = async (req, res) => {
    const status = req.params.status;
    const produto = await produtosModel.selecionarPorStatus(status);

    if(produto.length === 0){
        return res.status(404).json({
            message: `Produto não encontrado para o filtro aplicado`
        });
        
    }

    res.status(200).json({
        produto
    });
}

const criarProduto = async (req, res) => {
    const {nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria} = req.body;
    let status_estoque;

    if(!nome || !descricao || !preco || preco < 0 || !qtd_estoque || qtd_estoque < 0 || 
    !qtd_min_estoque || qtd_min_estoque < 0 || !id_categoria){

        return res.status(400).json({
            erro: `Todos os campos são obrigatórios. Preco e estoque devem ser maiores do zero!`
        });
    }

    if(qtd_estoque > qtd_min_estoque){
        status_estoque = 'NORMAL';
    }

    if(qtd_estoque <= qtd_min_estoque){
        status_estoque = 'BAIXO';
    }

    if(qtd_estoque == 0){
        status_estoque = 'SEM ESTOQUE';
    }
    console.log(status_estoque);
    const novoProduto = await produtosModel.criar(nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria, status_estoque);

    res.status(200).json({
        novoProduto
    });
}

const atualizarProduto = async (req, res) => {
    const id = req.params.id;
    let {nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria} = req.body;
    let status_estoque;

    const produtoBuscado = await produtosModel.selecionarPorId(id);

    if(produtoBuscado.length === 0){
        return res.status(404).json({
            message: `O produto que você quer editar não foi encontrado`
        });
    }

    if(preco < 0 || qtd_estoque < 0 || qtd_min_estoque < 0){
        return res.status(400).json({
            erro: `Preco, Quantidade de Estoque e Quantidade Mínima de Estoque devem ser maiores que Zero.`
        });
    }

    if(!nome){
        nome = produtoBuscado[0].nome;
    }

    if(!descricao){
        descricao = produtoBuscado[0].descricao;
    }

    if(!preco){
        preco = produtoBuscado[0].preco;
    }

    if(!qtd_estoque){
        qtd_estoque = produtoBuscado[0].qtd_estoque;
    }

    if(!qtd_min_estoque){
        qtd_min_estoque = produtoBuscado[0].qtd_min_estoque;
    }

    if(!id_categoria){
        id_categoria = produtoBuscado[0].id_categoria;
    }

    if(qtd_estoque > qtd_min_estoque){
        status_estoque = 'NORMAL';
    }

    if(qtd_estoque <= qtd_min_estoque){
        status_estoque = 'BAIXO';
    }

    if(qtd_estoque == 0){
        status_estoque = 'SEM ESTOQUE';
    }

    const produtoAtualizado = await produtosModel.atualizar(id, nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria, status_estoque);

    res.status(200).json({
        produtoAtualizado,
    });

}

const deletarProduto = async (req, res) => {
    const id = req.params.id;
    const produto = await produtosModel.selecionarPorId(id);

    if(produto.length === 0){
        return res.status(404).json({
            message: `O produto que você quer excluir não foi encontrado`
        });
    }

    const produtoExcluido = await produtosModel.deletar(id);

    res.status(200).json({
        message: `Produto excluído com sucesso`,
        excluido: produtoExcluido
    });
}

module.exports = {
    listarProdutos,
    listarProdutosPorId,
    listarProdutosPorCategoria,
    listarProdutosPorStatus,
    criarProduto,
    atualizarProduto,
    deletarProduto
}