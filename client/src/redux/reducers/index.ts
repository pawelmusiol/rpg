import { combineReducers, Reducer, AnyAction} from "redux";
import { AnyARecord } from "dns";

const userReducer: Reducer = (state = [], action:AnyAction ) => {
	switch (action.type) {
		case "LOGIN_USER":
			return [
				{
					id: action.token,
					login: action.login
				}
			]
	
		case "LOGOUT_USER":
			const userId = action.data
			
			
			return state.filter((user:any) => user.id === action.data)
			break
				
		default:
			return state
	}
}


const rootReducer = combineReducers({
	user: userReducer
})

export default rootReducer