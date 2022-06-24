import store from '@/store'

export const requestWithNotification = async (context, request, params) => {
	try {
		return await request(params)
	} catch (e) {

	}
}
