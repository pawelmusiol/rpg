import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom"

import './App.css';
import Home from './pages/home'
import More from  './pages/more'

function App() {

  const [Data, setData] = useState("")

  const callAPI = () => {
    fetch("http://localhost:9000/test")
    .then(res => res.text())
    .then(res => setData(res))
  }

  useEffect(()=>{
    callAPI()
  },[]
  )

  return (
    <Router>
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/about'>More</Link>
      </div>
      <div>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <More/>
          </Route>
        </Switch>
        <p>{Data}</p>
      </div>
    </Router>
  );
}

export default App;
