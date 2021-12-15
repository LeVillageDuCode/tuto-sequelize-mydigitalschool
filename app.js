const sequelize = require('./models');

console.log(`On teste la connexion à la BDD`);


sequelize.authenticate()
.then(() => {
    console.log('Connexion établie!')

    // Forcer la synchronisation entre mon code et la BDD
    // Code génère la BDD
    sequelize.sync({ force: true })
})
.then(() => {
    console.log('Les tables de ma BDD ont été bien générées!')
})
.catch((err) => {
    console.log(`Ma BDD plante, voici l'erreur: ${err}`)
})