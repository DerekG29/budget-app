import { useState } from 'react'

import './App.css'

import InfoPanel from './components/InfoPanel';
import ItemList from './components/ItemList';

function App() {

  return (
    <div className="app-wrapper">
      <InfoPanel />
      <ItemList />
    </div>
  )
}

export default App
