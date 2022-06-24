import api from "@/services";

export const PostingsModule = {
	namespaced: true,
	state: {
		postings: [],
	},
	mutations: {
		setPostings(state, postings) {
			state.postings = postings
		}
	},
	actions: {
		async fetch({ commit }) {
			const postings = await api.postings.getPostings()
			commit('setPostings', postings)
		},
		async create({ commit, dispatch }, posting) {
			await api.postings.createPosting(posting)
			dispatch('fetch')
		},
		async update({ commit, dispatch }, posting) {
			await api.postings.updatePosting(posting)
			dispatch('fetch')
		},
	}
}
