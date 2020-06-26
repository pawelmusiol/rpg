import React from 'react';
import { 
  BrowserRouter as Router,
} from "react-router-dom"

import './App.css';
import MainRouter from './pages/mainRouter';

function App() {
  return (
    <Router>
      <MainRouter/>
    </Router>
  );
}

export default App;
