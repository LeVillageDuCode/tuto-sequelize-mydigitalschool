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
