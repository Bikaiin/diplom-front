<template>
  <div id="app">
    <TopBar v-if="!isLogin" :current-page="currentPage" />
    <router-view/>
		<section
				class="sectionNotifications"
				v-if="!!notifications.length || true"
		>
			<b-notification
					v-for="notification in notifications"
					type="is-danger is-light"
					aria-close-label="Close notification"
					role="alert"
					@close="handleRemoveNotification(notification.id)">
				{{notification.message}}
			</b-notification>
		</section>
  </div>
</template>

<script>
import TopBar from './components/common/TopBar'
import { mapState, mapActions, mapGetters } from "vuex";

export default {
	components: {
		TopBar,
	},
	created() {
		if (this.isAuthorized) {
			this.checkToken()
		}
	},
	computed: {
		...mapState('notifications', ['notifications']),
		...mapGetters('auth', ['isAuthorized']),
		isLogin() {
			return this.currentPage === 'login'
		},
		currentPage() {
			return this.$route.name
		}
	},
	methods: {
		...mapActions('auth', ['checkToken']),
		...mapActions('notifications', ['removeNotification']),
		async handleRemoveNotification(id) {
			await this.removeNotification(id)
		}
	}
}
</script>

<style>
.sectionNotifications {
	position: absolute;
	top: 10px;
	right: 10px;
	max-height: calc(100vh - 10px);
	max-width: 300px;
	z-index: 1000;
	overflow-y: auto;
}
</style>
