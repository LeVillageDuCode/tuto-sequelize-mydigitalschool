
const User = (sequelize, DataTypes) => sequelize.define('user', {
    firstname: {
        type: DataTypes.STRING(50)
    },
    lastname: {
        type: DataTypes.STRING(50)
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

module.exports = User;