import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from './imageInSrc.jpg'
import vidd from './vidd.mp4'
import './style.css'

function App() {
  return (
    <div className="App">
         <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red"> Salsabil idriss omar</h1>
          <br />
          <img src="/imageInPublic.jpg" />
          <br />
          <img src={image} />
        </div>
        <video width={320} height={240} controls>
          <source src={vidd} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
      </div>
    </div>
  );
}

export default App;
