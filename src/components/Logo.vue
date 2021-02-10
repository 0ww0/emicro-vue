<template>
	<div class="logo-holder" :class="[navbar ? 'logo-navi' : '']">
		<img :src="logo" alt="e-micro">
	</div>
</template>

<script>
import logo from './../assets/image/logo.png'

export default {
	props: {
		navbar: Boolean,
	},
	data: () => ({
        logo: logo,
    }),
}
</script>

<style lang='scss' scoped>
	.logo-holder {
		width: 160px;
		margin: 20px auto;

		&.logo-navi {
			width: 90px;
			margin: 0;
			margin-left: auto;
    		margin-right: calc(50% - 45px);
		}
	}
</style>