export const CupsModule = {
	namespaced: true,
	state: {
		userCups: false,
		postingCups: false,
	},
	mutations: {
		toggleCups(state, flag) {
			if (flag) {
				state.userCups = !state.userCups
			} else {
				state.postingCups = !state.postingCups
			}
		},
	},
	actions: {
		async toggleCups({ commit }, flag) {
			commit('toggleCups', flag)
		}
	}
}
