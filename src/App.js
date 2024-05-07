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
    // Options for Pixel configuration
    const options = {
      autoConfig: true,  // set to true for automatic configuration
      debug: false,      // enable logs for debugging
    };
    // Initialize Facebook Pixel
    ReactPixel.init('2211111362560772', advancedMatching, options);
    ReactPixel.pageView(); // Send page view event

    // Additional scripts or setups can be placed here if needed
  }, []);

  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Footer />
      <YMInitializer accounts={[97226854]} options={{ webvisor: true }} />
    </div>
  );
}

export default App;
