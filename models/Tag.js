const Tag = sequelize.define('tag', {
    name: {
        type: Sequelize.STRING(20)
    }
})

module.exports = Tag;