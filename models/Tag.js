const { DataTypes } = require("sequelize");

const Tag = (sequelize) => sequelize.define('tag', {
    name: {
        type: DataTypes.STRING(20)
    }
})

module.exports = Tag;