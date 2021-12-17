const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get('/', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.user.findAll()
    .then(users => res.json(users))
})

router.post('/', (req, res ) => {
    sequelize.models.user.create(req.body)
    .then(userCreated => {
        res.status(201).json(userCreated);
    })
})

router.patch('/:userId', (req, res) => {
    sequelize.models.task.update(req.body,
        {where: {id : req.params.userId} })
    .then(nbRowsUpdated => {
        res.json(nbRowsUpdated);
    })
})

router.get('/:userId',(req,res) => {
    // userId peut être récupéré en faisant un req.params.id
    sequelize.models.user.findByPk(req.params.userId)
    .then(user => res.json(user))
})

module.exports =  router;
