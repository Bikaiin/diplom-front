import { FakeApi } from '@/services/swagger/fakeData'

export default class PostingsApi {
	constructor(domain, api) {
		this.api = api
		this.setDomain(domain)
	}

	setDomain(domain) {
		this.api._setDomain(domain)
	}

	async getPostings() {
		const {
			postings
		} = await FakeApi.getPostings()
		return postings
		// return await this.api.ParcelService_GetParcels()
		// response: { parcels: [ { id:0, size: { height: 0.0, width: 0.0, lenght: 0.0 } } ] }
	}

	async createPosting(posting) {
		return await FakeApi.createPosting(posting)
		// return await this.api.ParcelService_CreateParcelSize({
		// 	body: {
		// 		parcel: {
		// 			id:0,
		// 			size: {
		// 				height: 0.0,
		// 				width: 0.0,
		// 				lenght: 0.0
		// 			}
		// 		}
		// 	}
		// })
	}

	async updatePosting(posting) {
		return await FakeApi.updatePosting(posting)
		// return await this.api.ParcelService_UpdateParcel({
		// 	body: {
		// 		parcel: {
		// 			id:0,
		// 			size: {
		// 				height: 0.0,
		// 				width: 0.0,
		// 				lenght: 0.0
		// 			}
		// 		}
		// 	}
		// })
	}

	async getPostingEventsByUserId(id) {
		const {
			events
		} = await FakeApi.getEventsByUserId(id)
		return events
		// return await this.api.ParcelService_GetParcelAudit({
		// 	id: 0
		// })
		// response: { events: [{ changer: '', time: '', parcel: { id:0, size: { height: 0.0, width: 0.0, lenght: 0.0 } }}]}
	}

	async getPostingEventsByPostingId(id) {
		const {
			events
		} = await FakeApi.getEventsByPostingId(id)
		return events
		// return await this.api.ParcelService_GetParcelAudit({
		// 	id: 0
		// })
		// response: { events: [{ changer: '', time: '', parcel: { id:0, size: { height: 0.0, width: 0.0, lenght: 0.0 } }}]}
	}

	// async savePostingSize() {
	// 	return await this.api.ParcelService_SaveParcelSize({
	// 		body: {
	// 			parcelId: 0,
	// 			size: {
	// 				height: 0.0,
	// 				width: 0.0,
	// 				lenght: 0.0
	// 			}
	// 		}
	// 	})
	// }
}
