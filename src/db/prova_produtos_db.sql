CREATE DATABASE prova_produtos_db;
USE prova_produtos_db;

CREATE TABLE categorias(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(250) NOT NULL
);

-- Cada produto pertence a uma categoria, enquanto uma mesma categoria pode estar associada a diversos produtos.

CREATE TABLE produtos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    preco DECIMAL(8,2) NOT NULL,
    qtd_estoque INT NOT NULL,
    qtd_min_estoque INT NOT NULL,
    id_categoria INT NOT NULL,
    status_estoque ENUM('NORMAL', 'BAIXO', 'SEM ESTOQUE') NOT NULL,
    
    FOREIGN KEY (id_categoria) REFERENCES categorias (id)
);

INSERT INTO categorias (categoria) VALUES
('CONSUMIVEIS'),
('MAQUINAS'),
('ACESSORIOS');

INSERT INTO produtos (nome, descricao, preco, qtd_estoque, qtd_min_estoque, id_categoria, status_estoque) VALUES
('TUBO DE CONTATO Tbi CuCrZr 5/16 1,2MM', 'Tubo de contato constituido de Cobre/Cromo/Zirconio para soldas pesadas', '21.35', '300', '150', '1', 'NORMAL'),
('MAQUINA DE SOLDA BALMER VULCANO MIG 250M 220V MF', 'Máquina de solda 250A monofásica para soldas médias', '6990.90', '2', '1', '2', 'NORMAL'),
('TOCHA DE SOLDA MIG/MAG OXIMIG SBME 235 5MTS', 'Tocha de solda 300A', '1309.49', '5', '2', '3', 'NORMAL');

SELECT * FROM categorias;
SELECT * FROM produtos;





