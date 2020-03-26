import actionType from './actionType'
import axios from 'axios'
export const getAge = () => {
	return {
		type: actionType.ADD_AGE
	}
}

export const userLogin = (data) =>(dispatch)=> {
	return dispatch({
		type : actionType.IS_LOGIN,
		payload : axios.post('http://localhost:9000/login',data,{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
	})
}

// export const userLogin = (data) => {
// 	return {
// 		type : actionType.IS_LOGIN,
// 		payload : axios.post('http://localhost:9000/login',data,{
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json'
// 			}
// 		})
// 		// payload : axios({
// 		// 	method: 'post',
// 		// 	url: 'http://localhost:9000/login',
// 		// 	data: {
// 		// 		email,password
// 		// 	}
// 		// })
// 	}
// }
