import React, { Component } from "react";
import "./App.css";
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
        <div className="posts">
          {this.state.posts.map((post) => (
            <div className="post" key={post.id}>
              <img className="postImage" alt="post" src={post.urlToImage} />
              <h3>
                <a href={post.url}>{post.title.toUpperCase()}</a>
              </h3>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
