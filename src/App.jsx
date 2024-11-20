import { useState } from "react";

import "./styles/App.css";

import InfoPanel from "./components/InfoPanel";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

function App() {

  return (
    <div id="app">
      <InfoPanel />
      <ItemList />
      <Footer />
    </div>
  )
};

export default App;
