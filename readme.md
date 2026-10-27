# Documentação prova API - T DESI 2025 N1

## Breve resumo
Prova individual aplicada em sala de aula com o objetivo de desenvolver uma pequena API REST para uma situação problema envolvendo _produtos_ e _categorias_.

## Ferramentas utilizadas
* Node.js (backend)
* MySQL (bando de dados - modelagem e script)
* Postman (testes)

## Bibliotecas
* express
* dotenv
* mysql2

## Iniciar projeto
Para iniciar o projeto: 
1. clone esse repositório e rode:
```
npm install
```
2. Configure a .env de acordo com .env.exemple
3. Para rodar utilize ``` npm start ```

## Rotas

### CATEGORIAS

| Método | Rota | Descricao |
|--- | --- | --- |
| GET | `/categorias` | Lista todas as categorias | 
| GET | `/categorias/:id` | Lista a categoria pelo id |
| POST | `/categorias/cadastrar` | Cadastra nova categoria |
| PUT | `/categorias/atualizar/:id` | Atualiza categoria |
| DELETE | `/categorias/excluir/:id` | Deleta categoria |

### PRODUTOS
| Método | Rota | Descricao |
|--- | --- | --- |
| GET | `/produtos` | Lista todas os produtos | 
| GET | `/produtos/:id` | Lista o produto pelo id |
| GET | `/produtos/categoria/:categoria` | Lista produto pela categoria |
| GET | `/produtos/status/:status` | Lista produto pelo status do estoque |
| POST | `/produtos/cadastrar` | Cadastra novo produto |
| PUT | `/produtos/atualizar/:id` | Atualiza produto |
| DELETE | `/produtos/excluir/:id` | Deleta produto |

## DER
![DER]("C:\Users\joao_p_favero.EDU_FIESC\Documents\T DESI\prova_api\backend\src\db\DER_prova_api.png")