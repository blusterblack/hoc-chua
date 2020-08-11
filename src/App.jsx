import React from 'react';
import { hot } from 'react-hot-loader';
import TopBar from './TopBar';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainPage />
    </div>
  );
}

export default hot(module)(App);
