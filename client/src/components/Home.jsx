import React from "react";

const Home=()=> {
    return (
      <div style={{ position: 'relative' }}>
        <iframe
          src="https://giphy.com/embed/PSS9SyHjK81pCGceUE/video"
          frameBorder="0"
          allowFullScreen
          style={{
            width: '100%',
            height: '400px',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 style={{ color: 'white', textAlign: 'center' }}>Hello World!</h1>
        </div>
      </div>
    );
  }
  
  export default Home;