const fakeData = {
	tokens: {
		token: 'wewresdrgfhgjhkj2n453hwgrefdi75sfdcyva',
		refreshToken: 'wewresdrgfhgjhkj2n453hwgrefdi75sfdcyva'
	},
	users: {
		users: [
			{id:"1",login:"admin",password:"admin",roleIds:[1]}
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
		postings: [{
			id: 1,
			size: { height: 1.0, width: 1.0, lenght: 1.0 }
		}]
	},
	events: {
		events: [{
			changer: 'user_1',
			time: '01.01.2022T00:00:00,001Z',
			parcel: {
				id: 1,
				size: { height: 1.0, width: 1.0, lenght: 1.0 }
			}
		}]
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
	getEvents(postingId) {
		const list = fakeData.events.events.filter((event) => {
			return event.parcel.id === postingId
		})
		return Promise.resolve({
			events: list
		})
	},
	getPostings() {
		return Promise.resolve(fakeData.postings)
	},
	checkToken() {
		return Promise.resolve(true)
	},
	getToken() {
		return Promise.resolve(fakeData.tokens)
	}
}
