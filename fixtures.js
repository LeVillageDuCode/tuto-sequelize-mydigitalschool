const sequelize = require('./models');

console.log(`On teste la connexion à la BDD`);


sequelize.authenticate()
.then(() => {
    console.log('Connexion établie!')

    // Forcer la synchronisation entre mon code et la BDD
    // Code génère la BDD
    sequelize.sync({ force: true })
    .then(() => {
        console.log('Les tables de ma BDD ont été bien générées!')
        sequelize.models.user.create({
            firstname: "JB",
            lastname: "Lavisse",
            email: "jb@truc.fr"
        })
        sequelize.models.user.create({
            firstname: "Jean-Jacques",
            lastname: "Bourdin",
            email: "jb@bfmwc.fr"
        })

        sequelize.models.user.create({
            firstname: "Luc",
            lastname: "Skywalker",
            email: "luke@force.com"
        })

        sequelize.models.task.create({
            content: 'lorem ipsum',
            status: false,
            userId: 1
        })
        sequelize.models.task.create({
            content: 'dolor sit amet',
            status: true,
            userId: 2
        })
        sequelize.models.task.create({
            content: 'on va être poli',
            status: false,
            userId: 2
        })
        sequelize.models.task.create({
            content: 'Faire le ménage',
            status: true,
            userId: 1
        })
        sequelize.models.task.create({
            content: 'Manger un sandwich',
            status: false,
            userId: 3
        })

        sequelize.models.tag.create({
            name: "PHP"
        })
        sequelize.models.tag.create({
            name: "JS"
        })
    })
})
.catch((err) => {
    console.log(`Ma BDD plante, voici l'erreur: ${err}`)
})