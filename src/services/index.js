import usersApi from './swagger/users'
import postingsApi from './swagger/users'
import Users from './users'
import Postings from './postings'

const defaultDomain = 'test'

const api = {
	users: new Users(defaultDomain, usersApi),
	postings: new Postings(defaultDomain, postingsApi),
	setToken(token) {
		this.users.setToken(token)
		this.postings.setToken(token)
	},
}

export default api
