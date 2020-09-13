const express = require('express');
const route = express.Router();
const BlogPost = require('../Model/blogPost')

//Routes
route.get('/',(req,res)=>{
    BlogPost.find({}).then((data)=>{
        console.log('data',data);
        res.json(data)
    }).catch((err)=>{
        console.log("err")
    })
})

route.get('/name',(req,res)=>{
    const data ={
        _id: 123,
        name: "L",
        email: "l@gmail.com",
        password: "1234"
    }
    res.json(data)
})

route.post('/save',(req,res)=>{
  console.log("body",req.body);
  res.json({
      msg:"we received data"
  });
})

module.exports = route;