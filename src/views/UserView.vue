<template>
	<div>
		<h2>UserView</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: {},
		};
	},
	created() {
		const id = this.$route.params.id;
		// console.log('$route.params.id : ', this.$route.params.id);
		this.$store.dispatch('FETCH_USER', id);
	},
};
</script>

<style></style>
