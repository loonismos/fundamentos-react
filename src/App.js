import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";


function App() {
  const [posts, setPosts] = useState([
    {id: Math.random(), title: 'lamp', subtitle: 'fofos', likes: 50, read: false},
    {id: Math.random(), title: 'whitenoise', subtitle: 'based', likes: 60, read: true},
    {id: Math.random(), title: 'link do zap', subtitle: 'maneiro', likes: 55, read: false},
    {id: Math.random(), title: 'roddie', subtitle: 'acorda', likes: 69, read: false},
  ]);

  function handleRefresh() {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `titulo ${prevState.length + 1}`, 
          subtitle: `subtitulo ${prevState.length + 1}`, 
          likes: 69
        },
      ]);
    }

    function handleRemovePost(postId) {
      setPosts((prevState) => (
        prevState.filter(post => post.id !== postId)
      ));
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
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </>
  );
}

export default App;