import React from "react";
import { useLocation } from 'react-router-dom'
import api from '../../api'

export default function Character(){
	let location = useLocation()
	api.get(location.pathname)
	return(
		<div>
		Character
		</div>
	)
}