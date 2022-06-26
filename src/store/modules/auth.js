import api from '@/services'
import router from '@/router'

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
			state = {
				token: null,
				refreshToken: null,
				user: {
					id: null,
					login: null,
					roles: null
				},
			}
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
		}
	}
}
