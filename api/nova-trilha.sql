-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 11/01/2021 às 20:40
-- Versão do servidor: 8.0.22-0ubuntu0.20.04.3
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
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `senha`, `telefone`, `endereco`) VALUES
(1, 'Test1', 'test', '098f6bcd4621d373cade4e832627b4f6', 'test', 'test'),
(2, '', '', 'd41d8cd98f00b204e9800998ecf8427e', '', ''),
(3, 'test', 'testt', '751ec45015a704a39dc403001c963e97', 'sets', 'set');

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
(3, 'Barbeiro', 'Barbeiro com experiência ', 'Navalha Barbearia', 'São Paulo - SP', '1.000,00', 'logo_barbearia.png'),
(4, 'Aprendiz', 'Auxiliar no atendimento aos clientes, preencher documentos e tabelar dados de cadastro ', 'Menezes Advogados', 'São Paulo - SP', '1.000,00', 'logo_advocacia.png'),
(5, 'Ajudante Geral', 'Principais Reforma de estruturas metálicas. Restaurar, lixar e pintar. Efetuar manutenção de primeiro nível, limpando máquinas e ferramentas.', 'Silva & Santos ', 'São Paulo - SP', '1.000,00', 'logo_estudio.png'),
(6, 'Porteiro', 'Será responsável pela fiscalização e guarda do patrimônio, além de controlar a entrada e saída de pessoas e veículos nas dependências da empresa, bem como orientar as pessoas sobre seus destinos.', 'Menezes Advogados', 'São Paulo - SP', '2.000,00', 'logo_advocacia.png'),
(7, 'Secretária', 'Secretária da clínica, irá executar todas as funções de recepcionista de uma clínica.', 'Animalias Pet Center', 'São Paulo - SP', '1.500,00', 'logo_pet.png'),
(8, 'Barbeiro', 'Barbeiro com experiência ', 'Navalha Barbearia', 'São Paulo - SP', '1.000,00', 'logo_barbearia.png'),
(9, 'Aprendiz', 'Auxiliar no atendimento aos clientes, preencher documentos e tabelar dados de cadastro ', 'Menezes Advogados', 'São Paulo - SP', '1.000,00', 'logo_advocacia.png');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `vagas`
--
ALTER TABLE `vagas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `vagas`
--
ALTER TABLE `vagas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
