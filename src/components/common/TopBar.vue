<template>
	<b-navbar type="is-dark" fixed-top active>
		<template #brand>
			<div class="appName">Postinger</div>
		</template>

		<template #start>
			<b-navbar-item tag="router-link" :active="isUsersPage" to="/">
				Пользователи
			</b-navbar-item>
			<b-navbar-item tag="router-link" :active="isPostingsPage" to="/postings">
				Постинги
			</b-navbar-item>
		</template>
		<template #end>
			<b-navbar-item tag="div">
				<div class="buttons">
					<a class="button is-primary" @click="handleClickLogout">
						<strong>Выйти</strong>
					</a>
				</div>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: "TopBar",
	props: ['currentPage'],
	computed: {
		isUsersPage() {
			return this.currentPage === 'users' || this.currentPage === 'user'
		},
		isPostingsPage() {
			return this.currentPage === 'postings' || this.currentPage === 'posting'
		}
	},
	methods: {
		...mapActions('auth', ['logout']),
		handleClickLogout() {
			this.logout()
			this.$router.push({name:'login'})
		}
	}
}
</script>

<style>
.appName {
	margin: auto;
	padding: 0 20px;
	font-size: larger;
	font-weight: bold;
}
</style>
