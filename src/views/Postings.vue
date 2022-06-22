<template>
	<div class="user">
		<div>Postings page</div>
		<div>posting: {{postingId}}</div>
	</div>
</template>

<script>
export default {
	name: 'Postings',
	components: {},
	computed: {
		postingId() {
			return this.$route.params.postingId || null
		}
	}
}
</script>

<style scoped>

</style>
