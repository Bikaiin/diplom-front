import api from '@/services'

export const UsersModule = {
	namespaced: true,
	state: {
		users: []
	},
	getters: {},
	mutations: {
		setUsers(state, users) {
			state.users = users
		},
	},
	actions: {
		async fetch({ commit }) {
			const users = await api.users.getUsers()
			commit('setUsers', users)
		},
		async create({ commit, dispatch }, user) {
			await api.users.createUser(user)
			dispatch('fetch')
		},
		async update({ commit, dispatch }, user) {
			await api.users.updateUser(user)
			dispatch('fetch')
		}
	}
}
