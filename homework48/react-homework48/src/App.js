import React from 'react';
import Header from './components/Header/Header.js';
import Navigation from './components/Navigation/Navigation.js';
import Container from './components/Container/Container.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="navigation">
          <Navigation />
        </div>
        <div className="container">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default App;

