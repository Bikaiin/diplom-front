<template>
  <div id="app">
    <TopBar v-if="!isLogin" :current-page="currentPage" />
    <router-view/>
  </div>
</template>

<script>
import TopBar from './components/common/TopBar'
import { api } from "@/services";

export default {
	components: {
		TopBar,
	},
	computed: {
		isLogin() {
			return this.currentPage === 'login'
		},
		currentPage() {
			return this.$route.name
		}
	}
}
</script>
