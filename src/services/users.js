// import { FakeApi } from '@/services_/swagger/fakeData'
import { errorHandler } from './error-handler'

export default class UserApi {
	constructor(domain, api) {
		this.api = api
		this.setDomain(domain)
	}

	setDomain(domain) {
		this.api._setDomain(domain)
	}

	async checkToken(token) {
		const {
			data
		} = await errorHandler(this.api.AuthService_Check, {token}, false, '', true)

		return data || false
		// FakeApi.checkToken(token)
	}

	async createToken({ login, password }) {
		const {
			data
		} = await errorHandler(this.api.AuthService_Auth, {
			body: { login, password }
		}, false, 'Не верный логин или пароль!')

		return data || false
		// FakeApi.getToken({ body: { login, password } })
		// request: { body: { login, password } }
		// response: { token: '', refreshToken: '' }
	}

	async refreshToken(refreshToken) {
		const {
			data
		} = await errorHandler(this.api.AuthService_Refresh, {
			body: { refreshToken }
		}, false, '', true)

		return data || false

		// FakeApi.getToken({ body: { refreshToken } })
		// request: { body: { refreshToken } }
		// response: { token: '', refreshToken: '' }
	}

	async getUsers() {
		const {
			data
		} = await errorHandler(this.api.AuthService_GetUsers,
			{},
			[],
			'Не удалось загрузить список пользователей!')

		return data?.users?.map(({
			id, login, password, role_ids: roleIds
		}) => ({
			id, login, password, roleIds
		})) || []

		// FakeApi.getUsers()
		// response: { users: [{ id: 0, login: '', password: '', roleIds: [0] }]}
	}

	async createUser({ login, password, roleIds }) {
		const isOk = await errorHandler(this.api.AuthService_Create,
			{ body: { login, password, roleIds }},
			false,
			'Не удалось добавить пользователя!')

		return Boolean(isOk)

		// FakeApi.createUser(user)
		// request: { body: { login: '', password: '', roleIds: [0] }}
	}

	async updateUser({ id, login, password, roleIds }) {
		const isOk = await errorHandler(this.api.AuthService_UpdateUser,
			{ body: { id, login, password, role_ids: roleIds }},
			false,
			'Не удалось обновить пользователя!')

		return typeof isOk === 'boolean' ? isOk : true

		// FakeApi.updateUser(user)
		// request: { body: { id: 0, password: '', roleIds: [0] }}
	}

	async getUserRoles() {
		const {
			data
		} = await errorHandler(this.api.AuthService_GetRoles,
			{},
			[],
			'Не удалось получить список ролей!')

		return data?.roles?.map(({
			name, role_id: id
		}) => ({
			name, id
		})) || []

		// FakeApi.getRoles()
		// response: { roleId: 0, name: '' }
	}
}
