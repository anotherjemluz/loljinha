# LOLJINHA

Trabalho para a disciplina de Programação Web I

### Dependencias do backend

bcrypt-nodejs - criptografia de senhas

body-parser - ??

consign - ??

cors - para permitir o request de origens diferentes

express- para criar webservices

jwt-simple - segurança

knex - biblioteca para acesso ao banco de dados relacional

moment - data

mongoose - acesso ao banco de dados mongo db

node-schedule - para o temporizador

passport e passport-jwt - segurança

pg - drive do postgres

pm2 - launcher do postgres


### Login PostGres

é o usuário e a senha pedida na instalação do postgres na máquina. 

```
user: admin
senha: admin
```

### Comandos Postgres (após fazer login)

para criar um banco:

```
CREATE DATABASE nomedobanco;
```

para conectar-se a um banco:

```
\c nomedobanco;
```

para listar as tabelas do banco conectado:

```
\dt
```