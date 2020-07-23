export const GetUser = (token:any, login:string) => ({
	type: 'LOGIN_USER',
	token,
	login
})

export const RemoveUser = (token:any) => ({
	type:'LOGOUT_USER',
	token
})
