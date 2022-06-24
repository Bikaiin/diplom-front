<template>
  <div class="cups">
			<b-button
					@click="toggleCups(true)"
					:label="userBtnText"
					type="is-primary"
			/>
		<b-button
					@click="toggleCups(false)"
					:label="postingBtnText"
					type="is-primary"
			/>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
	name: 'Cups',
	computed: {
		...mapState('cups', ['userCups', 'postingCups']),
		userBtnText() {
			return `${this.userCups ? 'Отключить заглушку' : 'Включить заглушку'} на странице пользователи`
		},
		postingBtnText() {
			return `${this.postingCups ? 'Отключить заглушку' : 'Включить заглушку'} на странице постинги`
		}
	},
	methods: {
		...mapActions('cups', ['toggleCups'])
	}
}
</script>

<style>
.cups {
	padding: 20px;
	display: flex;
	gap: 20px;
}
</style>
