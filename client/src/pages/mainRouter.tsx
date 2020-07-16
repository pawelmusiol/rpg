import React from 'react';
import { 
  Switch,
  Route,
} from "react-router-dom"


import Home from './home'
import More from  './more'
import LoginPage from "./Login";
import LinkApi from "./LinkApi";

const Login = LoginPage

const MainRouter = () => {

    /*const [Data, setData] = useState()

    const callAPI = (urlPath:any) => {
        fetch("http://127.0.0.1:9000" + urlPath)
        .then(res => res.json())
        .then(res => setData(res))
    }
    console.log(Data)
    let location = useLocation()

    useEffect(()=>{
        callAPI(location.pathname)
    },[])*/



  return (
    
      <div>
        <LinkApi path={'/'}>Strona Główna</LinkApi>
        <LinkApi path={'/Login'}>Login</LinkApi>
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
        <div>x</div>
      </div>
  );
}
export default MainRouter