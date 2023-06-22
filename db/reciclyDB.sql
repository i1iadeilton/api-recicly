create database apiRecicly;

use apiRecicly;

create table Recicly(
codigo int primary key auto_increment,
nomeItem varchar(100),
tipo varchar(30),
recicla varchar(45)
);

insert into recicly(nomeItem, tipo, recicla)
values
	('Coca-cola', 'Alumínio', 'Reciclável'),
    ('Coca-cola', 'Vidro', 'Reciclável');
INSERT INTO recicly(nomeItem, tipo, recicla)
VALUES 
    ('Garrafa de água', 'Plástico', 'Reciclável'),
    ('Lata de refrigerante', 'Alumínio', 'Reciclável'),
    ('Jornal', 'Papel', 'Reciclável'),
    ('Embalagem de papelão', 'Papelão', 'Reciclável'),
    ('Vidro quebrado', 'Vidro', 'Reciclável'),
    ('Bateria de carro', 'Metal', 'Reciclável'),
    ('Plástico filme', 'Plástico', 'Reciclável'),
    ('Caixa de leite', 'Cartão', 'Reciclável'),
    ('Pilha usada', 'Bateria', 'Reciclável'),
    ('Saco de lixo', 'Plástico', 'Não reciclável');

    
select * from recicly;