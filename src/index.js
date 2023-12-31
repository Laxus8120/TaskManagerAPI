const bodyParser= require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const db = require('./models/index');
const passport  = require('passport');
const  {passportAuth} = require('./config/jwt-config-middleware');

const apiRoutes = require('./routes/index');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(PORT,async()=>{

    console.log(`Server started on PORT ${PORT}`);

})

