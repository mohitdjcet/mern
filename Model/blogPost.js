const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BlogPostSchema  = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // name: String,
    // email: String,
    // password: String
    title:String,
    body:String,
    data:{
        type:String,
        default:Date.now()
    }
})
//Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema );

module.exports = BlogPost;