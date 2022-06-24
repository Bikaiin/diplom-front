import { nanoid } from 'nanoid'

export const NotificationsModule = {
	namespaced: true,
	state: {
		notifications: []
	},
	mutations: {
		setNotification(state, notification) {
			state.notifications.push(notification)
		},
		removeNotification(state, id) {
			state.notifications = state.notifications.filter(notification => notification.id !== id)
		}
	},
	actions: {
		setNotification({ commit }, message) {
			const id = nanoid()
			commit('setNotification', { id, message })
			setTimeout(() => {
				commit('removeNotification', id)
			}, 5000)
		}
	}
}
