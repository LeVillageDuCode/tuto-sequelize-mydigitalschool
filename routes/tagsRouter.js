const express = require("express");
const router = express.Router();
const sequelize = require("../models");


router.get('/', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.tag.findAll()
    .then(tags => res.json(tags))
})

router.get('/:tagId',(req,res) => {
    sequelize.models.tag.findByPk(req.params.tagId)
    .then(tag => res.json(tag))
})

router.post('/', (req, res ) => {
    // Recevoir ce qu'il y a dans le body
    // de la requête
    console.log(req.body);
    sequelize.models.tag.create(req.body)
    .then(tagCreated => {
        res.status(201).json(tagCreated);
    })
})

router.delete('/:tagId', (req,res) => {
    sequelize.models.tag.destroy({
        where: {id: req.params.tagId}
    })
    .then(() => res.json({msg: "Tag supprimé!"}))
})

module.exports =  router;
