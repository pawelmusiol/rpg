import React from 'react'
import { RemoveUser } from './../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { useCookies } from 'react-cookie'

interface IUser {
	user: any
  }

export default function Logout(){
	
	const dispatch = useDispatch()
	const [cookies,useCookie, removeCookie] = useCookies()
	let UserData  = useSelector((state:IUser) => state.user)
	dispatch(RemoveUser(UserData.id))
	removeCookie('Token')
	removeCookie('Login')
	console.log(UserData)
	
	return(
	<Redirect push to='/'/>	
	)
	
}