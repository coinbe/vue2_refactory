<template>
	<div id="app">
		<toolbar></toolbar>
		<router-view></router-view>
	</div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
	name: 'App',
	components: {
		Toolbar,
	},
};
</script>

<style scoped>
body {
	margin: 0;
	padding: 0;
}
</style>
