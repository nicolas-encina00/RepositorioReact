import React from 'react';
import './App.css';
import Home from '../src/pages/Home';
import Navbar from './components/Navbar';
import {ItemListContainer} from './container/ItemListContainer'

function App() {

  return (
    <>
    <Home />
    <ItemListContainer/>
    </>
  );
}

export default App;
