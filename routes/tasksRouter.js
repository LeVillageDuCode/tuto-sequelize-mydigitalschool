const express = require("express");
const router = express.Router();
const sequelize = require("../models");


router.get('/', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.task.findAll()
    .then(tasks => res.json(tasks))
})

router.get('/:taskId',(req,res) => {
    sequelize.models.task.destroy({
        where: {id: req.params.taskId}
    })
    .then(() => res.json({msg: "Tache supprimée!"}))
})

router.post('/', (req, res ) => {
    sequelize.models.task.create(req.body)
    .then(taskCreated => {
        res.status(201).json(taskCreated);
    })
})

router.patch('/:taskId', (req, res) => {
    sequelize.models.task.update(req.body,
        {where: {id : req.params.taskId} })
    .then(nbRowsUpdated => {
        res.json(nbRowsUpdated);
    })
})


router.delete('/:taskId',(req,res) => {
    sequelize.models.task.findByPk(req.params.taskId)
    .then(task => res.json(task))
})

module.exports =  router;
