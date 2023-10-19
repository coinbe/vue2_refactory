<template>
	<div class="container">
		<div class="header">
			<router-link to="/news">&nbsp; News &nbsp;</router-link> |
			<router-link to="/asks">&nbsp; Asks &nbsp;</router-link> |
			<router-link to="/jobs">&nbsp; Jobs &nbsp;</router-link> |
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
	color: white;
	background-color: #24b883;
	display: flex;
	padding: 8px;
	a {
		color: white;
		text-decoration: none;
	}
}

.header .router-link-exact-active {
	color: #35495e;
}
</style>
