const User = sequelize.define('user', {
    firstname: {
        type: Sequelize.STRING(50)
    },
    lastname: {
        type: Sequelize.STRING(50)
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

module.exports = User;