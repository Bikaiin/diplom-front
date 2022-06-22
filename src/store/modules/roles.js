import api from '@/services'

export const RolesModule = {
	namespaced: true,
	state: {
		roles: []
	},
	mutations: {
		setRoles(state, roles) {
			state.roles = roles
		},
	},
	actions: {
		async fetch({ commit }) {
			const roles = await api.users.getUserRoles()
			commit('setRoles', roles)
		}
	}
}
