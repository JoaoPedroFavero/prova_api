const db = require(`../db/db`);

const selecionarTodos = async() => {
    const [resultado] = await db.query(
        "SELECT * FROM produtos"
    );

    return resultado;
};

const selecionarPorId = async(id) => {
    const [resultado] = await db.query(
        "SELECT * FROM produtos WHERE id = ?",
        [id]
    );

    return resultado;
};

const selecionarPorCategoria = async(categoria) => {
    const [resultado] = await db.query(
        "SELECT * FROM produtos WHERE id_categoria = ?",
        [categoria]
    );

    return resultado;
}

const selecionarPorStatus = async(status) => {
    const [resultado] = await db.query(
        "SELECT * FROM produtos WHERE status_estoque = ?",
        [status]
    );

    return resultado;
}

const criar = async(nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria, status_estoque) =>{
    const [resultado] = await db.query(
        "INSERT INTO produtos (nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria, status_estoque) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria, status_estoque]
    );

    return {
        id: resultado.insertId,
        nome, 
        descricao,
        preco,
        qtd_estoque,
        qtd_min_estoque,
        id_categoria,
        status_estoque
    }
}

const atualizar = async(id, nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria, status_estoque) => {
    const [resultado] = await db.query(
        "UPDATE produtos SET nome=?, descricao=?, preco=?, qtd_estoque=?, qtd_min_estoque=?, id_categoria=?, status_estoque=? WHERE id = ?",
        [nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria, status_estoque, id]
    );

    return {
        id,
        nome, 
        descricao,
        preco,
        qtd_estoque,
        qtd_min_estoque,
        id_categoria,
        status_estoque
    }
}

const deletar = async(id) => {
    const [resultado] = await db.query(
        "DELETE FROM produtos WHERE id = ?",
        [id]
    );

    return resultado.affectedRows;
}; 

module.exports = {
    selecionarTodos,
    selecionarPorId,
    selecionarPorCategoria,
    selecionarPorStatus,
    criar,
    atualizar,
    deletar
}