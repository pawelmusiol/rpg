const API_URL = 'http://127.0.0.1:9000'

const request = (endpoint, method = 'GET', data = null) => {
	const url = `${API_URL}${endpoint}`
	const config = {
		method,
		headers:{
			'Content-type': 'application/json',
		}
	}
	if (method === 'POST') {
		config.body = JSON.stringify(data)
		console.log(data)
	}
	if (endpoint === undefined) {
		return null
	}
	
	return fetch(url, config)
	.then(res => res.json())
}

const get = (endpoint) => request(endpoint)
const post = (endpoint, data) => request(endpoint, 'POST', data)
const put = (endpoint, data) => request(endpoint, 'PUT', data);
const _delete = (endpoint) => request(endpoint);

export default {
	get,
	post,
	put,
	delete: _delete
}