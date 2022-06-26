import { FakeApi } from '@/services/swaggers/fakeData'
import {errorHandler} from "@/services/error-handler";

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
			data
		} = await errorHandler(this.api.ParcelService_GetParcels,
			{},
			[],
			'Не удалось получить список постингов!')

		return data?.parcels || []

		// FakeApi.getPostings()
		// response: { parcels: [ { id:0, size: { height: 0.0, width: 0.0, lenght: 0.0 } } ] }
	}

	async createPosting({
		size, barcode
	}) {
		const isOk = await errorHandler(this.api.ParcelService_CreateParcelSize,
			{
				body: { parcel: { size, barcode } }
			},
			[],
			'Не удалось добавить постинг!')

		return Boolean(isOk)
		// FakeApi.createPosting(posting)
	}

	async updatePosting({
			id, size, barcode
		}) {
		const isOk = await errorHandler(this.api.ParcelService_UpdateParcel,
			{
				body: {id, barcode, size: {
					width: parseFloat(size.width) || 0,
					height: parseFloat(size.height) || 0,
					length: parseFloat(size.length) || 0,
					}
				}
			},
			[],
			'Не удалось обновить постинг!')

		return typeof isOk === 'boolean' ? isOk : true
		// FakeApi.updatePosting(posting)
	}

	async getPostingEventsByUserId(id) {
		const {
			data
		} = await errorHandler(this.api.ParcelService_GetParcelAudit,
			{ id },
			[],
			'Не удалось получить список событий пользователя!')

		return data?.events || []

		//FakeApi.getEventsByUserId(id)
		// response: { events: [{ changer: '', time: '', parcel: { id:0, size: { height: 0.0, width: 0.0, lenght: 0.0 } }}]}
	}

	async getPostingEventsByPostingId(id) {
		const {
			data
		} = await errorHandler(this.api.ParcelService_GetParcelAudit,
			{ id },
			[],
			'Не удалось получить список событий постинга!')

		return data?.events || []

		// FakeApi.getEventsByPostingId(id)
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
