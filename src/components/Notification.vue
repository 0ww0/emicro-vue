<template>
	<div class="notification is-danger">
		{{ message }}
	</div>
</template>

<script>
export default {
	name: 'Notification',
	// eslint-disable-next-line vue/require-prop-types
	props: ['message']
}
</script>

<style scoped>
	.notification {
		width: 100%;
		color: #ffffff;
		padding: 10px;
		margin-bottom: 10px;
		border-radius: 4px;
	}

	.is-danger {
		background-color: #ca2e2e;
	}
</style>
