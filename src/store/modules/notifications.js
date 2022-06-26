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
			const notification = state.notifications.find(notification => notification.id == id)
			if (notification && notification.timer) {
				clearTimeout(notification.timer)
				state.notifications = state.notifications.filter(notification => notification.id != id) || []
			}
		}
	},
	actions: {
		setNotification({ commit }, message) {
			const id = nanoid()
			const timer = setTimeout(() => {
				commit('removeNotification', id)
			}, 5000)
			commit('setNotification', { id, message, timer })
		},
		removeNotification({ commit }, id) {
			commit('removeNotification', id)
		}
	}
}
