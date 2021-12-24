import React, { Component } from 'react';
import './App.css';
import BmiHesapla from './components/bmiHesapla';
import BmiNedir from './components/bmiNedir';


function App() {
  return (
    <div>
      <BmiNedir />
      <BmiHesapla />

    </div>
  );
}

export default App;
