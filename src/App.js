import './App.css';
import Header from './component/header/header';
import Main from './component/main/main';
import Menu from './component/menu/menu';
import React from 'react';
import { YMInitializer } from 'react-yandex-metrika'; // Импорт YMInitializer

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      {/* Инициализация Яндекс.Метрики с вашим ID счетчика */}
      <YMInitializer accounts={[96923782]} options={{ webvisor: true }} />
    </div>
  );
}

export default App;
