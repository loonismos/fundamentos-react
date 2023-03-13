import React, { useState } from "react";

import Post from "../Post";
import Header from "../Header";
import { ThemeProvider } from "../../context/ThemeContext";

import styles from './App.scss';

function App() {
  const [posts, setPosts] = useState([
    {id: Math.random(), title: 'lamp', subtitle: 'fofos', likes: 50, read: false, removed: true},
    {id: Math.random(), title: 'whitenoise', subtitle: 'based', likes: 60, read: true, removed: false},
    {id: Math.random(), title: 'link do zap', subtitle: 'maneiro', likes: 55, read: false, removed: false},
    {id: Math.random(), title: 'roddie', subtitle: 'acorda', likes: 69, read: false, removed: false},
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
      setPosts((prevState) => prevState.map(
        post => (
          post.id === postId
          ? { ...post, removed: true }
          : post
        )
      ));
    }

  return (
    <ThemeProvider> 
      <Header>
        <h2 className={styles.title}>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post 
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;