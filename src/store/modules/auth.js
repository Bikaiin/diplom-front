import api from '@/services'
import router from '@/router'

export const AuthModule = {
	namespaced: true,
	state: {
		token: null,
		refreshToken: null
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
		logout(state) {
			state.token = null
			state.refreshToken = null
		}
	},
	actions: {
		async login({ commit }, payload) {
			const tokens = await api.users.createToken(payload)

			if (!tokens.token || !tokens.refreshToken) {
				return false
			}

			commit('setTokens', tokens)
			api.setToken(tokens.token)

			await router.push('/')
		},
		async logout({ commit }) {
			commit('logout')

			await router.push('/login')
		},
		async checkToken({ commit, state }) {
			if (!state.token) {
				return
			}

			await api.users.checkToken(state.token)
		},
		async refreshToken({ commit, state }) {
			if (!state.refreshToken) {
				return
			}

			const tokens = await api.users.refreshToken(state.refreshToken)

			if (!tokens.token || !tokens.refreshToken) {
				return false
			}

			commit('setTokens', tokens)
		}
	}
}
