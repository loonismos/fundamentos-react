import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";


function App() {
  const [posts, setPosts] = useState([
    {id: Math.random(), title: 'lamp', subtitle: 'fofos', likes: 50},
    {id: Math.random(), title: 'whitenoise', subtitle: 'based', likes: 60},
    {id: Math.random(), title: 'link do zap', subtitle: 'maneiro', likes: 55},
    {id: Math.random(), title: 'roddie', subtitle: 'acorda', likes: 69},
  ]);

  function handleRefresh() {

    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `titulo ${prevState.length + 1}`, 
          subtitle: `subtitulo ${prevState.length + 1}`, 
          likes: 69
        },
      ]);
    }, 2000)
    
    console.log({posts})
  }

  return (
    <>

      <Header>
        <h2>posts da semana</h2>
        <button onClick={handleRefresh}>atualizar</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post 
          key={post.id}
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