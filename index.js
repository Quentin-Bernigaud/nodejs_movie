const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const {connection} = require('./database.js');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(cors());

router.get('/', (req, res) => {
})

router.get('/movies', (req, res) => {
    connection.query(`SELECT * FROM movie`, (error, all_movies) => {
    if (error) res.status(201).json({ error });
    res.status(201).json({ all_movies });
})
});

router.post('/add_movie', (req, res) => {
    const url = req.body;
    console.log(url);
    let sql = `INSERT INTO Movie (title, date) VALUES ('${url.title}', '${url.date}');`, error;
    if (error) res.status(201).json({ error });
    res.status(201).json(url);
    connection.query(sql);
});

router.post('/edit_movie', (req, res) => {
    const url = req.body;
    console.log(url);
    let sql = `UPDATE Movie SET title = '${url.title}', date = '${url.date}' WHERE id = ${url.id}`, error;
    if (error) res.status(201).json({ error });
    res.status(201).json(url);
    connection.query(sql);
});

router.post('/delete_movie', (req, res) => {
    const url = req.body;
    console.log(url);
    let sql = `DELETE FROM Movie WHERE id = ${url.id}`, error;
    if (error) res.status(201).json({ error });
    res.status(201).json(url);
    connection.query(sql);
});

server.use(router);
server.listen(port, () => {
    console.log(`Node Server is running on port ${port} !`);
})