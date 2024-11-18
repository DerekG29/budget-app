import { useState } from 'react'

import './styles/App.css'

import InfoPanel from './components/InfoPanel';
import ItemList from './components/ItemList';

function App() {

  return (
    <div id="app">
      <InfoPanel />
      <ItemList />
    </div>
  )
}

export default App
