<template>
	<section class="wrapper">
		<slot />
	</section>
</template>

<script>
export default {
	name: "Wrapper"
}
</script>

<style lang="scss">
	.wrapper {
		width: 100%;
		height: 100vh;
		font-size: 14px;
	}
</style>