<template>
	<div class="logo-holder" :class="[centerBack ? 'center-back' : '', center ? 'center' : '', small ? 'small' : '']">
		<img :src="logo" alt="e-micro">
	</div>
</template>

<script>
import logo from './../assets/image/logo.png'

export default {
	props: {
		centerBack: Boolean,
		center: Boolean,
		small: Boolean
	},
	data: () => ({
        logo: logo,
    }),
}
</script>

<style lang='scss' scoped>
	.logo-holder {
		width: 160px;
	}

	.small {
		width: 90px;
	}

	.center {
		margin: 0 auto;
	}

	.center-back {
		margin-left: auto;
		margin-right: calc(50% - 45px);
	}
</style>