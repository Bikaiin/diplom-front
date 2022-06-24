const fakeData = {
	tokens: {
		token: 'wewresdrgfhgjhkj2n453hwgrefdi75sfdcyva',
		refreshToken: 'wewresdrgfhgjhkj2n453hwgrefdi75sfdcyva'
	},
	users: {
		users: [
			{id:1,login:"admin",password:"admin",roleIds:[1]},
			{id:2,login:"manager",password:"manager",roleIds:[2]},
			{id:3,login:"user",password:"user",roleIds:[3]}
		]
	},
	roles: {
		roles: [
			{ id: 1, name: 'admin'},
			{ id: 2, name: 'manager'},
			{ id: 3, name: 'user'}
		]
	},
	postings: {
		postings: [
			{id: 1, barcode: '%15%1', size: { height: 1.0, width: 1.0, lenght: 1.0 }},
			{id: 2, barcode: '%15%2', size: { height: 2.0, width: 1.0, lenght: 3.0 }},
			{id: 3, barcode: '%15%3', size: { height: 0.3, width: 0.3, lenght: 1.5 }},
		]
	},
	events: {
		events: [
			{
				changer: 1,
				time: '23.06.2022 00:00:00',
				parcel: {id: 1, barcode: '%15%1', size: { height: 1.0, width: 1.0, lenght: 1.0 }}
			},
			{
				changer: 1,
				time: '23.06.2022 01:30:55',
				parcel: {id: 2, barcode: '%15%2', size: { height: 2.0, width: 1.0, lenght: 3.0 }}
			},
			{
				changer: 2,
				time: '23.06.2022 01:31:22',
				parcel: {id: 2, barcode: '%15%2', size: { height: 2.0, width: 1.0, lenght: 3.0 }}
			},
			{
				changer: 2,
				time: '23.06.2022 12:01:00',
				parcel: {id: 3, barcode: '%15%3', size: { height: 0.3, width: 0.3, lenght: 1.5 }}
			},
			{
				changer: 2,
				time: '23.06.2022 13:04:00',
				parcel: {id: 3, barcode: '%15%3', size: { height: 0.3, width: 0.3, lenght: 1.5 }}
			}
		]
	},
}

export const FakeApi = {
	getUsers() {
		return Promise.resolve(fakeData.users)
	},
	createUser(user) {
		fakeData.users.users.push({
			...user,
			id: fakeData.users.users.length ? (parseInt(fakeData.users.users[fakeData.users.users.length - 1].id) + 1) : 1
		})
		return Promise.resolve(true)
	},
	updateUser(user) {
		fakeData.users.users = fakeData.users.users.map((_user) => {
			return _user.id === user.id ? user : _user
		})
		return Promise.resolve(true)
	},
	getRoles() {
		return Promise.resolve(fakeData.roles)
	},
	getEventsByUserId(userId) {
		const list = fakeData.events.events.filter((event) => {
			return event.changer === userId
		})
		return Promise.resolve({
			events: list
		})
	},
	getEventsByPostingId(postingId) {
		const list = fakeData.events.events.filter((event) => {
			return event.parcel.id === postingId
		})
		return Promise.resolve({
			events: list
		})
	},
	checkToken() {
		return Promise.resolve(true)
	},
	getToken() {
		return Promise.resolve(fakeData.tokens)
	},
	getPostings() {
		return Promise.resolve(fakeData.postings)
	},
	createPosting(posting) {
		fakeData.postings.postings.push({
			...posting,
			id: fakeData.postings.postings.length ? (parseInt(fakeData.postings.postings[fakeData.postings.postings.length - 1].id) + 1) : 1
		})
		return Promise.resolve(true)
	},
	updatePosting(posting) {
		fakeData.postings.postings = fakeData.postings.postings.map((_posting) => {
			return _posting.id === posting.id ? posting : _posting
		})
		return Promise.resolve(true)
	},
}
