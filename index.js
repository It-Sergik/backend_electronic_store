require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/routes');

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use('/api', router);
app.use(express.json());

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=> console.log(`Start server port: ${PORT}`));
    } catch (e){
        console.log(e.message);
    }
};


start();


