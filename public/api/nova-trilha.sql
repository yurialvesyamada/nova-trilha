-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 25/02/2021 às 14:31
-- Versão do servidor: 8.0.23-0ubuntu0.20.04.1
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `nova-trilha`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresa`
--

CREATE TABLE `empresa` (
  `id_empresa` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  `Ramo_atividade` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_abertura` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `empresa`
--

INSERT INTO `empresa` (`id_empresa`, `nome`, `cnpj`, `Ramo_atividade`, `email`, `senha`, `data_abertura`, `telefone`, `endereco`, `data`) VALUES
(1, 'josiel souza de jesus', '368588', 'teste', 'josielsouza.dj@gmail.com', '123', '3545', '1 95088-6634', '', '2021-02-20 13:43:45');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cidade`
--

CREATE TABLE `tb_cidade` (
  `id_cidade` int NOT NULL,
  `cidade` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `tb_cidade`
--

INSERT INTO `tb_cidade` (`id_cidade`, `cidade`) VALUES
(1, 'são roque');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_user` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `escolaridade` varchar(255) NOT NULL,
  `funcao` varchar(255) NOT NULL,
  `codigo_cidade` int DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_user`, `nome`, `email`, `senha`, `telefone`, `endereco`, `escolaridade`, `funcao`, `codigo_cidade`, `data`) VALUES
(1, 'josiel souza de jesus', 'josielsouza.dj@gmail.com', '123', '1244141', '', 'E. Fundamental Completo', '65464', NULL, '2021-02-24 18:04:31'),
(2, 'teste3', 'teste3@teste3', '123', '12314123', '', 'E. Superior Incompleto', '142424', NULL, '2021-02-24 18:07:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vagas`
--

CREATE TABLE `vagas` (
  `id` int NOT NULL,
  `vaga` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `descricao` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `empregador` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `localizacao` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `salario` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `imagem` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `fk_usuario` int DEFAULT NULL,
  `fk_cidade` int DEFAULT NULL,
  `fk_empresa` int DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `vagas`
--

INSERT INTO `vagas` (`id`, `vaga`, `descricao`, `empregador`, `localizacao`, `salario`, `imagem`, `fk_usuario`, `fk_cidade`, `fk_empresa`, `data`) VALUES
(4, 'programador', 'desenvolvimento web', 'Itaú ', 'sp', '500000', NULL, NULL, NULL, NULL, '2021-02-24 19:48:50'),
(3, 'motorista', 'dirigir', 'avatar', 'sp ', '333333', NULL, NULL, NULL, NULL, '2021-02-24 18:31:24'),
(1, 'Recepcionista', 'Área e especialização profissional: Administração - Recepção', 'Animalias Pet Center', 'São Paulo - SP', '1.500,00', 'logo_pet.png', NULL, NULL, NULL, '2021-02-25 11:08:11'),
(2, 'Secretária', 'Secretária da clínica, irá executar todas as funções de recepcionista de uma clínica.', 'Animalias Pet Center', 'São Paulo - SP', '1.500,00', 'logo_pet.png', NULL, NULL, NULL, '2021-02-25 11:08:11');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `empresa`
--
ALTER TABLE `empresa`
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices de tabela `vagas`
--
ALTER TABLE `vagas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`fk_usuario`),
  ADD KEY `fk_cidade` (`fk_cidade`),
  ADD KEY `fk_empresa` (`fk_empresa`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `vagas`
--
ALTER TABLE `vagas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
