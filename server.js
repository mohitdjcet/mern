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
//HTTP Request check
app.use(morgan('tiny'));
app.use('/api',routes);


// const data ={
//     title:"Welcome",
//     body:"jadkjasdnkjsadn akjdnaskjdna kjsdanjksadn"
// }
// const newBlogPost = new BlogPost(data)  //Instance of model

// newBlogPost.save((error)=>{
// if(error){
//     console.log("data not save")

// }else{
//     console.log("data save")
// }
// })
app.listen(PORT,console.log(`server is start at ${PORT}`))




// //Saving data to our schema
// const data = {
//     _id: new mongoose.Types.ObjectId(),
//     name: "z",
//     email: "z@gmail.com",
//     password: "1234"
// }