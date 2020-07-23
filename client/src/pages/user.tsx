import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import api from './../api'
import { useParams } from "react-router-dom";

interface IUser {
	user: any
}

function User(){

	let errorMessage = "Najpierw Sie Zaloguj"

	let UserData  = useSelector((state:IUser) => state.user)
	UserData = UserData[0]


	let DataToShow
	let { id } = useParams()
	
	
	
	
	
	if(UserData){
		if (UserData.id === id) {
			DataToShow = UserData
		}
	}

	return (
		<p>
			{DataToShow ? DataToShow.login : errorMessage}
		</p>
		)	
}

export default User