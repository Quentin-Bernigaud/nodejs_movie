const {connection} = require('./database.js');
const {writeFile, mkdir} = require("fs");
const {join} = require('path');
const destDir = join('./', 'movies');
const messages = [];

connection.query(`SELECT * FROM movie`, (error, all_movies) => {
    // const createFile = () => {
        return new Promise( (resolve, reject) => {
            mkdir(destDir, () => {
                const fileNameToCreate = join(destDir, 'list_of_movies.txt');
                const content = `${all_movies}`;
                const message = `Chemin du fichier qui vient d'être créé : ${fileNameToCreate}`;
                writeFile(fileNameToCreate, content, (err) => {
                if (err) reject(err);
                messages.push(message);
                });
            });
        });
    // }; 
});
    