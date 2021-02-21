use `nova-trilha`;


-- INSERT INTO test.a('y', 'z') SELECT b.x, b.y FROM test.b b JOIN c ON c.y = b.y;

-- INSERT INTO test.a ('y', 'z') SELECT b.x, b.y FROM test.b b;

-- TRUNCATE TABLE usuario;

create database teste;
use teste;

select * from usuario;


CREATE TABLE `usuario` (
  `id_user` int  primary key auto_increment,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL unique,
  `senha` varchar(255) NOT NULL,
  `telefone` INTEGER not null,
   `endereco` varchar(255) NOT NULL,
  `escolaridade` varchar(255) NOT NULL,
  `funcao` varchar(255) NOT NULL,
   `id_cidade`  int,  
  data datetime default now()
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

select * from empresa;
select * from usuario;
select * from  tb_cidade;


	
select u.email, u.senha,e.email, e.senha from usuario u
          INNER JOIN empresa e
			where u.email = 'ma'
            and u.senha = '123'
            or e.email = 'josielsouza.dj@gmail.com'
			and e.senha = '123';
            
            
         /**
            
              ON e.`email` = e.'marcus@gmail',
          WHERE e.`senha` = e.'123',
          OR u.`email`= u.'{$email}',
          OR u.`senha`= u.'{$senha}';

         
         **/
 
 

 -- teste certo
	BEGIN; 
					
	insert into usuario (nome,  email, senha, telefone, endereco, escolaridade, funcao) values
    
    ('josiel', 'josiel@teste', '123','658468','são roque','ensino medio', 'programador'); 
    
	 insert into tb_cidade (cidade) values ('são roque');
							   
	COMMIT;

INSERT INTO `empresa` (  `nome`, cnpj) VALUES ('joao','ascui648');

select * from empresa;

INSERT INTO `tb_cidade` ( `id_cidade` ,  `cidade`) VALUES
( 1,'santo amaro');

