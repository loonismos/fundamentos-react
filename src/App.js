import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>

      <Header title="death grips' blog">
        <h2>posts da semana</h2>
      </Header>

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