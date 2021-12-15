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
