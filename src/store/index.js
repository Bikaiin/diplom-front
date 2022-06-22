import Vue from 'vue'
import Vuex from 'vuex'
import { AuthModule } from './modules/auth'
import { UsersModule } from './modules/users'
import { RolesModule } from './modules/roles'
import { PostingsModule } from './modules/postings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  	auth: AuthModule,
  	users: UsersModule,
  	roles: RolesModule,
  	postings: PostingsModule
  }
})
