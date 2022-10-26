import apiUrl from '../apiConfig'
import axios from 'axios'

export const characCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/characs',
		data: {
			charac: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const characIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/characs',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const characShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/characs/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const characUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/characs/' + id,
		data: {
			charac: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const characDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/characs/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}
