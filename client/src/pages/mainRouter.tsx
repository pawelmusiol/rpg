import React from 'react';
import { 
  Switch,
  Route,
} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from 'react-cookie'


import Home from './Home/home'
import More from  './more'
import User  from './user'
import LoginPage from "./Login";
import LinkApi from "./LinkApi";
import Logout from './Logout'
import api from '../api';
import {GetUser, RemoveUser} from './../redux/actions'


const Login = LoginPage
const UserPage = User

const MainRouter = () => {

    interface IUser {
      user: any
    }
    const dispatch = useDispatch()
    const [cookies, setCookie, removeCookie] = useCookies()

    let UserData  = useSelector((state:IUser) => state.user)
    let UserId = ''
    if (UserData[0]) {
      UserId = UserData[0].id
    }
    else if (cookies.Token && !UserId) {
      console.log(cookies.Token)
      UserId = cookies.Token
      let login = cookies.Login
      dispatch(GetUser(UserId,login))
    }
    else if(UserId && !cookies.Token){
      removeCookie('Token')
      removeCookie('Login')
      dispatch(RemoveUser(UserData.id))
    }
    
  return (
    
      <div>
        <LinkApi path={'/'}>Strona Główna</LinkApi>
        {UserId === '' ? (
        <LinkApi path={'/Login'}>Login</LinkApi>
        ):(
          <div style= {{display: 'inline-block'}}>
        <LinkApi path={'/User/'+UserId}>User</LinkApi>
        <LinkApi path={'/Logout'}>Logout</LinkApi>
          </div>
        )}
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
          <Route path="/User/:id">
            <UserPage/>
          </Route>
          <Route path='/Logout'>
            <Logout/>
          </Route>
        </Switch>
        <div>x</div>
      </div>
  );
}
export default MainRouter