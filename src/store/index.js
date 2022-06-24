import Vue from 'vue'
import Vuex from 'vuex'
import { AuthModule } from './modules/auth'
import { UsersModule } from './modules/users'
import { RolesModule } from './modules/roles'
import { PostingsModule } from './modules/postings'
import { EventsModule } from './modules/events'
import { CupsModule } from './modules/caps'
import { NotificationsModule } from './modules/notifications'

Vue.use(Vuex)

export default new Vuex.Store({
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
