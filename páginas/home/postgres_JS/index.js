const Client = require('pg').Client
const cliente = new Client(
    {
        user: 'postgres',
        password: 'senha123',
        port: 5432,
        host: 'localhost',
        database: 'dbescola'
    }
)

cliente.connect()
// let nome = 'Grilo'
// let idade = 15
// cliente.query(`select * from aluno`)
// cliente.query(`insert into dbescola (nome, serie, email, comentario) values (${'josevaldo'},${'9C'}),${'kenzo.gushi@germinare.org.br'},${'lorem ipsum dolor sit amet.'};`)

// .then(resultado => {
//     const res = resultado.rows
//     console.log(res);
// }).finally(() => cliente.end())
