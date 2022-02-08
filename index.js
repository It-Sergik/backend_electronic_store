require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/routes');
const path = require('path');

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


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


