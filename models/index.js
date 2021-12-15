// On a récupéré ce qu'il faut pour initialiser la BDD
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite:datas.db');

// On est en train de récupérer nos modèles pour établir le schéma
const Post = require('./Post')(sequelize);

const Task = require('./Task')(sequelize);
const User = require('./User')(sequelize);
const Tag = require('./Tag')(sequelize);

// Un article peut être écrit par une seule personne
Post.belongsTo(User)
// une personne peut écrire plusieurs articles
User.hasMany(Post)

// Etablir une association pour qu'un utilisateur puisse avoir plusieurs tâches
User.hasMany(Task)
// Mais qu'une tâche appartient à un seul utilisateur
Task.belongsTo(User)

// Faire en sorte que la tâche peut avoir plusieurs tags
Task.belongsToMany(Tag, {through: 'tasks_tags'})
// et un tag être dans plusieurs tâches
Tag.belongsToMany(Task, {through: 'tasks_tags'})

module.exports = sequelize;