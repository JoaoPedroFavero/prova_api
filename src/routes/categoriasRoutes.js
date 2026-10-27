const express = require(`express`);
const router = express.Router();

const categoriasController = require(`../controllers/categoriasController`);

router.get(`/categorias`, categoriasController.listarCategorias);
router.get(`/categorias/:id`, categoriasController.listarCategoriasPorId);

router.post(`/categorias/cadastrar`, categoriasController.criarCategoria);

router.put(`/categorias/atualizar/:id`, categoriasController.atualizarCategoria);

router.delete(`/categorias/excluir/:id`, categoriasController.deletarCategoria);

module.exports = router;