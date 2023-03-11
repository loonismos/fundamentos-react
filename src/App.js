import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>

      <Header>
        <h2>posts da semana</h2>
      </Header>

      <hr />

      <Post 
        likes={20}
        post={{
          title: 'gegegege',
          subtitle: 'gagagaga',
        }}
      />

      <Post 
        likes={22}
        post={{
          title: 'gegeasd',
          subtitle: 'gagagaga',
        }}
      />

      <Post 
        likes={50}
        post={{
          title: 'gegegfa',
          subtitle: 'gagagaga',
        }}
      />

    </>
  );
}

export default App;