import React from "react";

import Post from "./Post";
import Header from "./Header";

const posts = [
  {title: 'lamp', subtitle: 'fofos', likes: 50},
  {title: 'whitenoise', subtitle: 'based', likes: 60},
  {title: 'link do zap', subtitle: 'maneiro', likes: 55},
  {title: 'roddie', subtitle: 'acorda', likes: 69},
]

function App() {
  return (
    <>

      <Header>
        <h2>posts da semana</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post 
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}

    </>
  );
}

export default App;