/* const Client = require('pg').Client
const Express = require('express')
const App = Express()
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

App.post('/', async function(req, res) {
    const resultado = await cliente.query("SELECT * FROM form")
    const rows = resultado.rows

    res.send(rows)
})

App.post()

App.listen(3000, () => "Ouvindo...") */

export { Client } from 'pg';

const client = new Client({
    user: 'kenzogushi',
    password: 'senha123',
    host: 'localhost',
    database: 'dbescola',
    port: 5432 //porta padrão do psql
})

client.query('INSERT INTO form', (err, res) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(res.rows);
    }
    client.end();
})

client.end