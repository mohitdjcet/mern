const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const routes = require('./Routes/api');
const app = express();
// const cors = require('cors')
//PORT Define
const PORT = process.env.PORT || 8080;

//DB
mongoose.connect('mongodb+srv://mohit:asQm59L5cr17dlVc@cluster0-fe3th.mongodb.net/tutorial?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("DB connected"))

// app.use(cors());
// Data parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//HTTP Request logger
app.use(morgan('tiny'));
app.use('/api',routes);

app.listen(PORT,console.log(`server is start at ${PORT}`))
