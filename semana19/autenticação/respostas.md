1. a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
Concordo que string seja melhor que números pelo fato da comunicação entre front e back serem feitas por JSON. Facilita muito.

2. a) A primeira parte do código, utilizando o knex e as informações para acessar o banco, conecta o código com o banco de dados.
b)  CREATE TABLE user_table_name (
    id VARCHAR(255), 
    email VARCHAR(255), 
    password VARCHAR(255)
    );  

    3. a) O que a linha as string faz? Por que precisamos usar ela ali?
        Como a chave pode vir como string ou undefined, colocamos as string para garantir que a chave virá como string.

        