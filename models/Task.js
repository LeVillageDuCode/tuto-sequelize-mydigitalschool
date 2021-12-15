// function Task(sequelize) { return sequelize.define(... }
const Task = (sequelize, DataTypes) => sequelize.define('task', {
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
     status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = Task;