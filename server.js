const express = require('express');
const sequelize = require('./models');

const app = express();
const port = 3000;

const usersRouter = require('./routes/usersRouter');
app.use('/users',usersRouter);

// Avant mon serveur express, je veux être que la connexion
// à la BDD soit faite
sequelize.authenticate()
.then(() => {
    console.log("Database connection OK!");
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    })
})
.catch(err => {
    console.log('Unable to connect to the database');
    console.log(err.message);
    process.exit();
})