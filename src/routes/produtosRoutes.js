const express = require(`express`);
const router = express.Router();

const produtosController = require(`../controllers/produtosController`);

router.get(`/produtos`, produtosController.listarProdutos);
router.get(`/produtos/:id`, produtosController.listarProdutosPorId);
router.get(`/produtos/categoria/:categoria`, produtosController.listarProdutosPorCategoria);
router.get(`/produtos/status/:status`, produtosController.listarProdutosPorStatus);

router.post(`/produtos/cadastrar`, produtosController.criarProduto);

router.put(`/produtos/atualizar/:id`, produtosController.atualizarProduto);

router.delete(`/produtos/excluir/:id`, produtosController.deletarProduto);

module.exports = router;