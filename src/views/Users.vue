<template>
  <div class="users">
		<div class="actions">
			<h1 class="title">Пользователи</h1>
			<b-button type="is-primary" @click="handleClickAddUser">Добавить</b-button>
		</div>
		<b-table :data="users" @click="handleClickUser($event)" hoverable>
			<b-table-column field="id" label="ID" width="40" v-slot="props">
				{{ props.row.id }}
			</b-table-column>
			<b-table-column field="login" label="Логин" width="100" v-slot="props">
				{{ props.row.login }}
			</b-table-column>
			<b-table-column field="roles" label="Роли" width="150" v-slot="props">
				<b-taglist>
					<b-tag v-for="role in getRoleById(props.row.roleIds)">{{ role }}</b-tag>
				</b-taglist>

			</b-table-column>
		</b-table>

		<b-modal v-if="user" :active="isActiveCard" :can-cancel="false">
			<template #default="props">
					<div class="card">
						<h2 v-if="user && user.id" class="subtitle">Редактирование пользователя</h2>
						<h2 v-else-if="user" class="subtitle">Добавление пользователя</h2>
						<b-field label="Логин">
							<b-input v-model="user.login" placeholder="Введите логин"></b-input>
						</b-field>
						<b-field label="Пароль">
							<b-input v-model="user.password" placeholder="Введите пароль"></b-input>
						</b-field>
						<b-field label="Роли">
							<b-taginput
									v-model="userRoles"
									:data="filteredTags"
									autocomplete
									:open-on-focus="true"
									field="name"
									icon="label"
									placeholder="Введите название роли"
									@typing="getFilteredTags">
							</b-taginput>
						</b-field>
						<div class="actions">
							<b-button type="is-primary" @click="handleCloseUserForm(props.close)">Отмена</b-button>
							<b-button type="is-info is-light" @click="handleSaveUser(props.close)">Сохранить</b-button>
						</div>
					</div>
			</template>
		</b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Users',
	data() {
  	return {
  		user: null,
			filteredTags: [ ...(this.roles || []) ]
		}
	},
	async created() {
		await this.fetch()
		await this.fetchRoles()

  	if (!this.$route.params.userId) {
			return
		}

		const userId = parseInt(this.$route.params.userId)
		const user = this.users.find(user => user.id === userId)

		this.user = user || null
	},
	computed: {
  	...mapState('users', ['users']),
  	...mapState('roles', ['roles']),
		userRoles: {
  		get() {
				return this.user ? this.roles.filter((option) => {
					return this.user.roleIds.includes(option.id)
				}) : []
			},
  		set(options) {
				this.user.roleIds = options.map(option => option.id)
			}
		},
		isActiveCard() {
  		return !!this.user
		}
	},
	methods: {
		...mapActions('users', ['fetch', 'create', 'update']),
		...mapActions('roles', { fetchRoles: 'fetch' }),
		getRoleById(ids) {
			return this.roles.filter(role => ids.includes(role.id)).map(role => role.name)
		},
		getFilteredTags(text) {
			this.filteredTags = this.roles.filter((option) => {
				return option.name
						.toString()
						.toLowerCase()
						.indexOf(text.toLowerCase()) >= 0
			})
		},
		handleClickAddUser() {
			this.user = {
				login: '',
				password: '',
				roleIds: []
			}
		},
		handleClickUser(user) {
  		if (user) {
				this.user = user
				this.$router.replace({
					name: 'user',
					params: {
						userId: this.user.id
					}
				})
			}
		},
		handleCloseUserForm(fnClose) {
			fnClose()
  		this.user = null
			this.$router.replace({
				name: 'users'
			})
		},
		async handleSaveUser(fnClose) {
			if (this.user.id) {
				await this.update(this.user)
			} else {
				await this.create(this.user)
			}
			this.handleCloseUserForm(fnClose)
		}
	}
}
</script>

<style>
.users {
	padding: 10px;
}
.card {
	width: 500px;
	padding: 20px;
	margin: 0 auto;
}
.actions {
	display: flex;
	justify-content: space-between;
}
</style>
