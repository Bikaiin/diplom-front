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
					role="alert">
				{{notification.message}}
			</b-notification>
		</section>
  </div>
</template>

<script>
import TopBar from './components/common/TopBar'
import { mapState } from "vuex";

export default {
	components: {
		TopBar,
	},
	computed: {
		...mapState('notifications', ['notifications']),
		isLogin() {
			return this.currentPage === 'login'
		},
		currentPage() {
			return this.$route.name
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
