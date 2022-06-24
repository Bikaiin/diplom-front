import axios from 'axios'
import store from '@/store'
import router from '@/router'

import usersApi from './swagger/users'
import postingsApi from './swagger/users'
import Users from './users'
import Postings from './postings'

const defaultDomainUser = 'http://130.193.53.122:8002'
const defaultDomainPostings = 'http://130.193.53.122:8012'

axios.interceptors.response.use((response) => response,
	async (error) => {
		if (error.response && error.response.status === 401) {
			try {
				await store.dispatch('auth/refreshToken', store.state.auth.refreshToken)
				const token = store.state.auth.token

				if (token) {
					error.config.headers['Authorization'] = `Bearer ${token}`
					api.setToken(token)
					return axios.request(error.config)
				}
				return Promise.reject(error)
			} catch (error) {
				await router.push({name: 'login'})
				return Promise.reject(error)
			}
		}

		return Promise.reject(error)
	}
);

const api = {
	users: new Users(defaultDomainUser, usersApi),
	postings: new Postings(defaultDomainPostings, postingsApi),
	setToken(token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	},
}

export default api
