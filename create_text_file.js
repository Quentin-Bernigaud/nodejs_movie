const {writeFile, mkdir} = require("fs");
const {join} = require('path');
const destDir = join('./', 'movies');
const messages = [];

const pushFile = () => {
    return new Promise( (resolve, reject) => {
        mkdir(destDir, () => {
            counter++;
            const fileNameToCreate = join(destDir, 'list_of_movies.txt');
            const content = `${movieTitle}`;
            const message = `Chemin du fichier qui vient d'être créé : ${fileNameToCreate}`;
            writeFile(fileNameToCreate, content, (err) => {
            if (err) reject(err);
            messages.push(message);
            })
        })
    })
};


module.exports = {pushFile};