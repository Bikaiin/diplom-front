const fakeData = {
	token: 'wewresdrgfhgjhkj2n453hwgrefdi75sfdcyva',
	users: [{
		id: 1,
		login: 'user_1',
		password: '123456',
		roleIds: [ 1 ]
	}],
	roles: [{ id: 1, name: 'admin'}, { id: 2, name: 'manager'}, { id: 3, name: 'user'}],
	postings: [{
		id: 1,
		size: { height: 1.0, width: 1.0, lenght: 1.0 }
	}],
	events: [{
		changer: 'user_1',
		time: '01.01.2022T00:00:00,001Z',
		parcel: {
			id: 1,
			size: { height: 1.0, width: 1.0, lenght: 1.0 }
		}
	}],
}

export const FakeApi = {
	getUsers() {
		return Promise.resolve(fakeData.users)
	},
	createUser(user) {
		fakeData.users.push({
			...user,
			id: fakeData.users.length ? (fakeData.users[fakeData.users.length - 1].id + 1) : 1
		})
		return Promise.resolve(true)
	},
	updateUser(user) {
		fakeData.users = fakeData.users.map((_user) => {
			return _user.id === user.id ? user : _user
		})
		return Promise.resolve(true)
	},
	getRoles() {
		return Promise.resolve(fakeData.roles)
	},
	getEvents(postingId) {
		const list = fakeData.events.filter((event) => {
			return event.parcel.id === postingId
		})
		return Promise.resolve(list)
	},
	getPostings() {
		return Promise.resolve(fakeData.postings)
	},
	checkToken() {
		return Promise.resolve(true)
	},
	getToken() {
		return Promise.resolve({
			token: fakeData.token,
			refreshToken: fakeData.token
		})
	}
}
