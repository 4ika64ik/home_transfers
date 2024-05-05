import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Main from './component/main/main';
import Menu from './component/menu/menu';
import React, { useEffect } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import ReactPixel from 'react-facebook-pixel';

function App() {
  useEffect(() => {
    // Advanced Matching
    const advancedMatching = {}; 
    // Опции для конфигурации пикселя
    const options = {
      autoConfig: true,  // set to true if you want automatic configuration
      debug: false,      // enable logs for debugging
    };
    // Инициализация Facebook Pixel
    ReactPixel.init('2211111362560772', advancedMatching, options);
    ReactPixel.pageView(); // Отправить событие просмотра страницы
  }, []);

  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Footer />
      <YMInitializer accounts={[97170920]} options={{ webvisor: true }} />
    </div>
  );
}

export default App;
