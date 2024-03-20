import './App.css';
import Header from './component/header/header';
import Main from './component/main/main';
import Menu from './component/menu/menu';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Header />
      <Menu/>
      <Main />
    </div>
  );
}

export default App;
