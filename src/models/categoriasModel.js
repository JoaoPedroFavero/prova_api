const db = require(`../db/db`);

const selecionarTodos = async() => {
    const [resultado] = await db.query(
        "SELECT * FROM categorias"
    );

    return resultado;
};

const selecionarPorId = async(id) => {
    const [resultado] = await db.query(
        "SELECT * FROM categorias WHERE id = ?",
        [id]
    );

    return resultado;
};

const criar = async(categoria) => {
    const [resultado] = await db.query(
        "INSERT INTO categorias (categoria) VALUES (?)",
        [categoria]
    );

    return {
        id: resultado.insertId,
        categoria
    }
}

const atualizar = async(id, categoria) => {
    const [resultado] = await db.query(
        "UPDATE categorias SET categoria = ? WHERE id = ?",
        [categoria, id]
    );

    return {
        id,
        categoria
    }
}

const deletar = async(id) => {
    const [resultado] = await db.query(
        "DELETE FROM categorias WHERE id = ?",
        [id]
    );

    return resultado.affectedRows;
}

module.exports = {
    selecionarTodos,
    selecionarPorId,
    criar,
    atualizar,
    deletar
}