import api from "@/services";

export const EventsModule = {
	namespaced: true,
	state: {
		eventsByUserId: [],
		eventsByPostingId: [],
	},
	mutations: {
		setEvents(state, payload) {
			const {
				events,
				isUserEvents,
				id,
			} = payload
			if (isUserEvents) {
				const has = state.eventsByUserId.some(item => item.id === id)
				if (has) {
					state.eventsByUserId = state.eventsByUserId.map(item => {
						return item.id === id ? {id, events} : item
					})
				} else {
					state.eventsByUserId = [
						...state.eventsByUserId,
						{id, events}
					]
				}
			} else {
				const has = state.eventsByPostingId.some(item => item.id == id)
				if (has) {
					state.eventsByPostingId = state.eventsByPostingId.map(item => {
						return item.id == id ? { id, events } : item
					})
				} else {
					state.eventsByPostingId = [
						...state.eventsByPostingId,
						{id, events}
					]
				}
			}
		}
	},
	actions: {
		async fetchByUserId({ commit }, id) {
			const events = await api.postings.getPostingEventsByUserId(id)

			commit('setEvents', {
				events,
				isUserEvents: true,
				id,
			})
		},
		async fetchByPostingId({ commit }, id) {
			const events = await api.postings.getPostingEventsByPostingId(id)

			commit('setEvents', {
				events,
				isUserEvents: false,
				id,
			})
		}
	}
}
