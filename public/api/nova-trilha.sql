-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 21/02/2021 às 13:07
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
  `id_cidade` int DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_user`, `nome`, `email`, `senha`, `telefone`, `endereco`, `escolaridade`, `funcao`, `id_cidade`, `data`) VALUES
(1, 'josiel', 'josiel@teste', '123', '658468', 'são roque', 'ensino medio', 'programador', NULL, '2021-02-20 13:52:41'),
(3, 'josiel', 'teste3@teste3', '12455', '6548', 'kbsdcas', '654654', '65464', NULL, '2021-02-20 16:20:57'),
(4, 'josiel souza de jesus', 'maria@gmail.com', '123', '23525235', '', '', 'motorista', NULL, '2021-02-20 19:03:32'),
(5, 'josiel', 'marcus@gmail', '123', '355568688', '', 'técnico', 'mecânico', NULL, '2021-02-20 19:12:53'),
(7, 'carla', 'carla@gmail', '123', '165868', '', 'técnico', 'cabeleleira ', NULL, '2021-02-21 11:25:00'),
(8, 'antonia', 'antonia@gmail.com', '123', '3535351', '', 'teste', 'teste', NULL, '2021-02-21 11:40:51'),
(9, 'mateus', 'matheus@gmail.com', '123', '3486', '', 'teste', 'teste', NULL, '2021-02-21 11:46:26'),
(10, 'teste44', 'teste44@gmail.com', '123', '38468', '', 'ensino médio', 'cabeleleira ', NULL, '2021-02-21 11:50:17'),
(11, 'olx', 'olx@gmail.com', '123', '64688', '', 'hauisdw', 'isdhew', NULL, '2021-02-21 12:56:31'),
(12, 'teste88', 'teste88@gmail.com', '123', '65486', '', 'uyguyyu', 'yufyufyufuyf', NULL, '2021-02-21 13:01:43');

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
  `imagem` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `vagas`
--

INSERT INTO `vagas` (`id`, `vaga`, `descricao`, `empregador`, `localizacao`, `salario`, `imagem`) VALUES
(1, 'Recepcionista', 'Área e especialização profissional: Administração - Recepção', 'Animalias Pet Center', 'São Paulo - SP', '1.500,00', 'logo_pet.png'),
(2, 'Secretária', 'Secretária da clínica, irá executar todas as funções de recepcionista de uma clínica.', 'Animalias Pet Center', 'São Paulo - SP', '1.500,00', 'logo_pet.png'),
(3, 'Cabelereira', 'Cabelereira com experiência ', 'Navalha Barbearia', 'São Paulo - SP', '1.100,00', 'logo_barbearia.png'),
(4, 'Secretária', 'Auxiliar no atendimento aos clientes, preencher documentos e tabelar dados de cadastro ', 'Menezes Advogados', 'São Paulo - SP', '1.100,00', 'logo_advocacia.png'),
(5, 'Ajudante Geral', 'Auxiliar na organização e limpeza\r\n\r\n', 'Silva & Santos ', 'São Paulo - SP', '1.100,00', 'logo_estudio.png'),
(6, 'Controladora de Acesso', 'Será responsável pela fiscalização e guarda do patrimônio, além de controlar a entrada e saída de pessoas e veículos nas dependências da empresa, bem como orientar as pessoas sobre seus destinos.', 'Menezes Advogados', 'São Paulo - SP', '2.000,00', 'logo_advocacia.png'),
(7, 'Secretária', 'Secretária da clínica, irá executar todas as funções de recepcionista de uma clínica.', 'Animalias Pet Center', 'São Paulo - SP', '1.500,00', 'logo_pet.png'),
(8, 'Cabelereira', 'Cabelereira com experiência ', 'Navalha Barbearia', 'São Paulo - SP', '1.100,00', 'logo_barbearia.png'),
(9, 'Secretária', 'Auxiliar no atendimento aos clientes, preencher documentos e tabelar dados de cadastro ', 'Menezes Advogados', 'São Paulo - SP', '1.600,00', 'logo_advocacia.png');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id_empresa`);

--
-- Índices de tabela `tb_cidade`
--
ALTER TABLE `tb_cidade`
  ADD PRIMARY KEY (`id_cidade`);

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
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id_empresa` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tb_cidade`
--
ALTER TABLE `tb_cidade`
  MODIFY `id_cidade` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `vagas`
--
ALTER TABLE `vagas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
