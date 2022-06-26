import api from '@/services'
import router from '@/router'

const rolesForBlockUsersPage = ['2', '3']
const rolesForBlockPostingsPage = ['3']

export const AuthModule = {
	namespaced: true,
	state: {
		token: null,
		refreshToken: null,
		user: {
			id: null,
			login: null,
			roles: null
		},
	},
	getters: {
		isAuthorized(state) {
			return Boolean(state.token && state.refreshToken)
		},
		isBlockedUsersPage(state) {
			return Boolean(state.user.roles?.length && rolesForBlockUsersPage.some(role => state.user.roles.includes(role)))
		},
		isBlockedPostingsPage(state) {
			return Boolean(state.user.roles?.length && rolesForBlockPostingsPage.some(role => state.user.roles.includes(role)))
		}
	},
	mutations: {
		setTokens(state, payload) {
			const { token, refreshToken } = payload
			state.token = token
			state.refreshToken = refreshToken
		},
		setUser(state, payload) {
			const { id, login, roles } = payload
			if (login) state.user.login = login
			if (id) state.user.id = id
			if (roles) state.user.roles = roles
		},
		logout(state) {
			state.token = null
			state.refreshToken = null
			state.user.id = null
			state.user.login = null
			state.user.roles = null
		}
	},
	actions: {
		async login({ commit }, payload) {
			const {
				token,
				refresh_token: refreshToken
			} = await api.users.createToken(payload)

			if (!token || !refreshToken) {
				return false
			}

			commit('setTokens', {
				token,
				refreshToken
			})
			commit('setUser', {login: payload.login})
			api.setToken(token)

			await router.push('/')
		},
		async logout({ commit }) {
			commit('logout')

			await router.push('/login')
		},
		async checkToken({ commit, dispatch, state }) {
			if (!state.token) {
				return
			}

			const {
				user_id: id,
				user_roles_ids: roles
			} = await api.users.checkToken(state.token)

			if (!id || !roles) {
				dispatch('logout')
			} else {
				commit('setUser', { id, roles })
				if (router.currentRoute.name === 'login') {
					await router.push('/')
				}
			}
		},
		async refreshToken({ commit, state }) {
			if (!state.refreshToken) {
				return
			}

			const {
				token,
				refresh_token: refreshToken
			} = await api.users.refreshToken(state.refreshToken)

			if (!token || !refreshToken) {
				return false
			}

			commit('setTokens', {
				token,
				refreshToken
			})
			api.setToken(token)
		},
		refreshUserDate({ commit, rootState }) {
			const userData = rootState.auth.user || null
			const user = userData ? rootState.users.users.find(user => {
				return user.id == userData.id || user.login == userData.login
			}) : null

			if (user) {
				console.log(user)
				commit('setUser', {
					id: user.id,
					login: user.login,
					roles: user.roleIds
				})
			}
		}
	}
}
