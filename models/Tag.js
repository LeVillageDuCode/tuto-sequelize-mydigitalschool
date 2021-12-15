
const Tag = (sequelize, DataTypes) => sequelize.define('tag', {
    name: {
        type: DataTypes.STRING(20)
    }
})

module.exports = Tag;