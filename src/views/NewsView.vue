<template>
	<div>
		<h2>NewsView</h2>
		<!-- <b-button variant="primary">Button</b-button> -->
		<div v-for="(news, index) in this.$store.state.news" :key="index">
			{{ news }}
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('FETCH_NEWS');
	},
};
</script>

<style></style>
