import store from '@/store'

export const errorHandler = async (request, params, defaultValue, defaultMessage, withoutNotification) => {
	try {
		return await request(params)
	} catch (e) {
		console.log('errorHandler', e)
		if (!withoutNotification) {
			const message = defaultMessage || e?.response?.data?.message || e?.response?.data?.error || 'Неизвестная ошибка!'
			await store.dispatch('notifications/setNotification', message)
		}

		return Promise.resolve(defaultValue)
	}
}
