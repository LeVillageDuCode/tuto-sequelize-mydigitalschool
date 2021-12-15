const Task = sequelize.define('task', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
     status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = Task;