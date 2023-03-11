import React from "react";

import Post from "./Post";

function App() {
  return (
    <>
      <h1>death grips' blog</h1>
      <h2>posts da semana</h2>  

      <hr />

      <Post 
        post={{
          title: 'gegegege',
          subtitle: 'gagagaga',
        }}
      />

      <Post 
        post={{
          title: 'gegeasd',
          subtitle: 'gagagaga',
        }}
      />

      <Post 
        post={{
          title: 'gegegfa',
          subtitle: 'gagagaga',
        }}
      />

    </>
  );
}

export default App;