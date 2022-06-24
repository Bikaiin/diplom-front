import { FakeApi } from '@/services/swagger/fakeData'

export default class UserApi {
	constructor(domain, api) {
		this.api = api
		this.setDomain(domain)
	}

	setDomain(domain) {
		this.api._setDomain(domain)
	}

	async checkToken(token) {
		// return await this.api.AuthService_Check({token})
		return FakeApi.checkToken(token)
	}

	async createToken({ login, password }) {
		// return await this.api.AuthService_Auth({
		// 	body: { login, password }
		// })
		return await FakeApi.getToken({ body: { login, password } }) // заглушка

		// request: { body: { login, password } }
		// response: { token: '', refreshToken: '' }
	}

	async refreshToken(refreshToken) {
		// return await this.api.AuthService_Refresh({
		// 	body: { refreshToken }
		// })
		return await FakeApi.getToken({ body: { refreshToken } }) // заглушка


		// request: { body: { refreshToken } }
		// response: { token: '', refreshToken: '' }
	}

	async getUsers() {
		const {
			users
		// } = await this.api.AuthService_GetUsers()
		} = await FakeApi.getUsers() // заглушка

		return users

		// response: { users: [{ id: 0, login: '', password: '', roleIds: [0] }]}
	}

	async createUser(user) {
		// return this.api.AuthService_Create(user)
		return await FakeApi.createUser(user) // заглушка

		// request: { body: { login: '', password: '', roleIds: [0] }}
	}

	async updateUser(user) {
		//return await this.api.AuthService_UpdateUser(user)
		return await FakeApi.updateUser(user)

		// request: { body: { id: 0, password: '', roleIds: [0] }}
	}

	async getUserRoles() {
		const {
			roles
		// } = await this.api.AuthService_GetRoles()
		} = await FakeApi.getRoles()

		return roles

		// response: { roleId: 0, name: '' }
	}
}
