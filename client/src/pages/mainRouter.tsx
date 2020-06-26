import React, { useState, useEffect } from 'react';
import { 
  Switch,
  Route,
  useLocation,
} from "react-router-dom"


import Home from './home'
import More from  './more'
import LoginPage from "./Login";
import LinkApi from "./LinkApi";

const Login = LoginPage

const MainRouter = () => {

    const [Data, setData] = useState("")

    const callAPI = (urlPath:any) => {
        
        fetch("http://127.0.0.1:9000" + urlPath)
        .then(res => res.text())
        .then(res => setData(res))
    }

    let location = useLocation()

    useEffect(()=>{
        callAPI(location.pathname)
    },[])


    

  return (
    
      <div>
        <LinkApi path={'/'} callAPI = {callAPI}>Strona Główna</LinkApi>
        <LinkApi path={'/Login'} callAPI = {callAPI}>Login</LinkApi>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/More">
            <More/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
        </Switch>
        <div>{Data}</div>
      </div>
  );
}
export default MainRouter