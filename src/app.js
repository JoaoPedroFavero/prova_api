const express = require(`express`);
const app = express();

app.use(express.json());

const categoriasRoutes = require(`./routes/categoriasRoutes`);
const produtosRoutes = require(`./routes/produtosRoutes`);

app.use(categoriasRoutes);
app.use(produtosRoutes);

module.exports = app;
