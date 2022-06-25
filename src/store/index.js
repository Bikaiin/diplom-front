import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import { AuthModule } from './modules/auth'
import { UsersModule } from './modules/users'
import { RolesModule } from './modules/roles'
import { PostingsModule } from './modules/postings'
import { EventsModule } from './modules/events'
import { CupsModule } from './modules/caps'
import { NotificationsModule } from './modules/notifications'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [createPersistedState({
		storage: {
			getItem: key => Cookies.get(key),
			setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
			removeItem: key => Cookies.remove(key)
		}
	})],
	modules: {
		auth: AuthModule,
		users: UsersModule,
		roles: RolesModule,
		postings: PostingsModule,
		events: EventsModule,
		cups: CupsModule,
		notifications: NotificationsModule
	}
})
