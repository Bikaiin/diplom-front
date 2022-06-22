import api from '@/services'

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
			console.log(tokens)
			if (!tokens.token || !tokens.refreshToken) {
				return false
			}

			commit('setTokens', tokens)
			api.setToken(tokens.token)

			console.log(this.$router)
			await this.$router.push('/')
		},
		logout({ commit }) {
			commit('logout')
		}
	}
}
