import { Outlet, Link } from "react-router-dom";
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='header-left'>
          <Link to={'/'}><h1>Kim Hellman</h1></Link>
        </div>
        <nav className='header-right'>
          <Link to={'projects'}>Projekt</Link>
          <Link to={'about'}>Om</Link>
          <Link to={'contact'}>Kontakt</Link>
        </nav>
      </header>
      <hr></hr>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
