

export default class PostingsApi {
	constructor(domain, api) {
		this.api = api
		this.setDomain(domain)
	}

	setDomain(domain) {
		this.api._setDomain(domain)
	}

	async getPostings() {
		// return await this.api.ParcelService_GetParcels()
		// response: { parcels: [ { id:0, size: { height: 0.0, width: 0.0, lenght: 0.0 } } ] }
	}

	async createPosting() {
		return await this.api.ParcelService_CreateParcelSize({
			body: {
				parcel: {
					id:0,
					size: {
						height: 0.0,
						width: 0.0,
						lenght: 0.0
					}
				}
			}
		})
	}

	async updatePosting() {
		return await this.api.ParcelService_UpdateParcel({
			body: {
				parcel: {
					id:0,
					size: {
						height: 0.0,
						width: 0.0,
						lenght: 0.0
					}
				}
			}
		})
	}

	async getPostingEvents() {
		return await this.api.ParcelService_GetParcelAudit({
			id: 0
		})
		// response: { events: [{ changer: '', time: '', parcel: { id:0, size: { height: 0.0, width: 0.0, lenght: 0.0 } }}]}
	}

	async savePostingSize() {
		return await this.api.ParcelService_SaveParcelSize({
			body: {
				parcelId: 0,
				size: {
					height: 0.0,
					width: 0.0,
					lenght: 0.0
				}
			}
		})
	}
}
