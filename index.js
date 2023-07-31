const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

 const userRoutes = require('./routes/userRoutes');

// middleware
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT | 3000;
app.listen(PORT, ()=>{
    console.log("Server up:",PORT);
})