const categoriasModel = require(`../models/categoriasModel`);

const listarCategorias = async (req, res) => {
    const categorias = await categoriasModel.selecionarTodos();

    if(categorias.length === 0){
        console.log(categorias);
        return res.status(404).json({
            message: `Nenhuma categoria cadastrada`
        });
        
    }

    res.status(200).json({
        categorias
    });
}

const listarCategoriasPorId = async (req, res) => {
    const id = req.params.id;
    const categoria = await categoriasModel.selecionarPorId(id);

    if(categoria.length === 0){
        console.log(categoria);
        return res.status(404).json({
            message: `Categoria não cadastrada`
        });
        
    }

    res.status(200).json({
        categoria
    });
}

const criarCategoria = async (req, res) => {
    const categoria = req.body;

    if(!categoria){
        return res.status(400).json({
            erro: `O nome da categoria é obrigatório`
        });
    }

    const novaCategoria = await categoriasModel.criar(categoria);

    res.status(200).json({
        novaCategoria
    });

}

const atualizarCategoria = async (req, res) => {
    const id = req.params.id;
    const categoria = req.body;

    const categoriaBuscada = await categoriasModel.selecionarPorId(id);

    if(categoriaBuscada.length === 0){
        return res.status(404).json({
            message: `A categoria que você quer editar não foi encontrada`
        });
    }

    if(!categoria){
        categoria = categoriaBuscada[0].categoria;
    }

    const categoriaAtualizada = await categoriasModel.atualizar(id, categoria);

    res.status(200).json({
        categoriaAtualizada
    });
}

const deletarCategoria = async (req, res) => {
    const id = req.params.id;
    const categoriaBuscada = await categoriasModel.selecionarPorId(id);

    if(categoriaBuscada.length === 0){
        return res.status(404).json({
            message: `A categoria que você quer excluir não foi encontrada`
        });
        
    }

    const categoriaExcluida = await categoriasModel.deletar(id);
    res.status(200).json({
        message: `Categoria excluída com sucesso`,
        excluida: categoriaExcluida
    });
}

module.exports = {
    listarCategorias,
    listarCategoriasPorId,
    criarCategoria,
    atualizarCategoria,
    deletarCategoria
}