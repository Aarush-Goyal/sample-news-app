import React, { Component } from "react";
import "./App.css";
import Post from "./components/post/Post";
import Navbar from "./components/navbar/Navbar";
// Importing axios
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get(
        "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=b3c9289eb7624c02bdf759a23b900324"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ posts: response.data.articles });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>News App</h1>
        {/* Navbar */}
        <Navbar />
        {/* Post list */}
        <div className="posts">
          {this.state.posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
