import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state={
    title:"",
    body:"",
    post:[]
  }
  componentDidMount=()=>{
    this.getBlogPost()
  }

  getBlogPost=()=>{
    axios.get('/api').then((resp)=>{
      const data = resp.data;
      this.setState({ post:data});
      console.log("Data has been received");
    }).catch(()=>{
      alert("Error")
    })
  }
  handlechange =({target})=>{
    const {name,value}= target;
    // const target = e.target;
    // const name = target.name;
    // const value = target.value;
    this.setState({
      [name]:value
    })
  }
  submit=(e)=>{
  e.preventDefault();
  const payload ={
    title: this.state.title,
    body:this.state.body
  }
  
  axios({
    url:"/api/save",
    method:'POST',
    data:payload
  }).then(()=>{
    console.log("Data has been saved");
    this.resetUserInput();
    this.getBlogPost();
  }).catch(()=>{
    console.log("Something got wrong")
  })
  }

  resetUserInput =() =>{
    this.setState({
      title:"",
      body:""
    })
  }
  displayBlogData=(posts)=>{
    if(!posts.length) return null;

    return posts.map((post,i)=>(
      <div key={i}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ))
  }
  render() {
    console.log("state:", this.state)
    return (
      <div>
        <h2>Welcome to MyApp</h2>
        <form onSubmit={this.submit}>
          <input 
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handlechange}
          />
          <textarea
          placeholder='Body'
          name= 'body'
          cols="30"
          rows="10"
          value={this.state.body}
          onChange={this.handlechange}
          ></textarea>
          <button>Submit</button>
        </form>
        <div>
          {this.displayBlogData(this.state.post)}
        </div>
      </div>
    );
  }
}

export default App;
