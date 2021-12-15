const express = require('express');
const sequelize = require('./models');

const app = express();
const port = 3000;

app.get('/users', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.user.findAll()
    .then(users => res.json(users))
})

app.get('/users/:userId',(req,res) => {
    // userId peut être récupéré en faisant un req.params.id
    sequelize.models.user.findByPk(req.params.userId)
    .then(user => res.json(user))
})

app.get('/tasks', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.task.findAll()
    .then(tasks => res.json(tasks))
})

app.get('/tasks/:taskId',(req,res) => {
    sequelize.models.task.destroy({
        where: {id: req.params.taskId}
    })
    .then(() => res.json({msg: "Tache supprimée!"}))
})

app.delete('/tasks/:taskId',(req,res) => {
    sequelize.models.task.findByPk(req.params.taskId)
    .then(task => res.json(task))
})

app.get('/tags', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.tag.findAll()
    .then(tags => res.json(tags))
})

app.get('/tags/:tagId',(req,res) => {
    sequelize.models.tag.findByPk(req.params.tagId)
    .then(tag => res.json(tag))
})

app.delete('/tags/:tagId', (req,res) => {
    sequelize.models.tag.destroy({
        where: {id: req.params.tagId}
    })
    .then(() => res.json({msg: "Tag supprimé!"}))
})

// Avant mon serveur express, je veux être que la connexion
// à la BDD soit faite
sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    })
})
.catch(err => {
    console.log('Unable to connect to the database');
    console.log(err.message);
    process.exit();
})