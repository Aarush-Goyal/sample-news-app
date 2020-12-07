// News Posts

import React from "react";

const Post = (props) => {
  return (
    <div className="post" key={props.post.id}>
      {/* <img className="postImage" alt="post" src={props.post.urlToImage} /> */}
      <div
        className="postImage"
        style={{
          width: "100%",
          height: "15vw",
          backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 0%, 1) 100%), url(${props.post.urlToImage})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div className="PostContent">
        <h3>
          <a href={props.post.url} className="PostTitle">
            {props.post.title.toUpperCase()}
          </a>
        </h3>
        <p className="PostDescription">{props.post.description}</p>
      </div>
    </div>
  );
};

export default Post;
