import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state={
    title:"",
    body:""
  }
  handlechange =(e)=>{
    const target = e.target;
    const name = target.name;
    const value = target.value;
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
    console.log("Data has been saved")
  }).catch(()=>{
    console.log("Something got wrong")
  })
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
      </div>
    );
  }
}

export default App;
