const express = require('express');
const axios = require('axios');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
// const {pushFile} = require('./file.js')
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
    console.log(url.title);
    console.log(url.date);
    let sql = `INSERT INTO Movie (title, date) VALUES ('${url.title}', '${url.date}');`, error;
    if (error) res.status(201).json({ error });
    res.status(201).json(url);
    connection.query(sql);
});

router.post('/edit_movie', (req, res) => {
    const url = req.body;
    console.log(url.id);
    console.log(url.title);
    console.log(url.date);
    let sql = `UPDATE Movie SET title = '${url.title}', date = '${url.date}' WHERE id = ${url.id}`, error;
    if (error) res.status(201).json({ error });
    res.status(201).json(url);
    connection.query(sql);
});

router.post('/delete_movie', (req, res) => {
    const url = req.body;
    console.log(url.id);
    console.log(url.title);
    console.log(url.date);
    let sql = `DELETE FROM Movie WHERE id = ${url.id}`, error;
    if (error) res.status(201).json({ error });
    res.status(201).json(url);
    connection.query(sql);
});

// router.get('/add_movie/:title/:date', (req, res) => {
    // connection.query(`INSERT INTO Movie (title, date) VALUES ('${movie_title}', '${movie_date}');`, (err, add_movie) => {
    //     if (error) res.status(201).json({ error });
    //     res.status(201).json({ add_movie });
    // })
// });

// router.get('/user/:id', (req, res) => {
//     const { id } = req.params;
//     connection.connect();
//     connection.query(`SELECT * FROM user WHERE id = ${id}`, (error, results) => {
//         if (error) res.status(201).json({ error });
//         res.status(201).json({ user: results });
//     })
//     console.log(id);
// })



    // axios.get(url)
    // .then(response => res.status(201).json({contenu : req.body}))
    // .catch(err => res.status(201).json({err}));
    // res.status(201).json(req.body);
    // connection.query(`INSERT INTO Movie (title, date) VALUES ('${req.body}');`, (error, add_movie) => {
    //     if (error) res.status(201).json({ error });
    //     res.status(201).json({ add_movie });
    // })

server.use(router);
server.listen(port, () => {
    console.log(`Node Server is running on port ${port} !`);
})