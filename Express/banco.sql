CREATE TABLE usuarios(
    nome varchar(50),
    email varchar(100),
    idade int(100)

);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "jose",
    "jose@gmail.com",
    62
);

SELECT * FROM usuarios WHERE idade>=18;

DELETE * FROM usuarios WHERE idade<18;

UPDATE usuarios SET nome ="calaca" WHERE nome = "gabriel";