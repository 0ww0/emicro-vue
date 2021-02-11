<template>
	<div class="logo-holder" :class="[centerBack ? 'center-back' : '', center ? 'center' : '', small ? 'small' : '']">
		<img :src="logoChange" alt="e-micro">
	</div>
</template>

<script>
import logo from './../assets/image/logo.png'
import logoAlt from './../assets/image/logo-alt.png'

export default {
	props: {
		centerBack: Boolean,
		center: Boolean,
		small: Boolean,
		alt: Boolean,
	},
	data: () => ({
        logo: logo,
		logoAlt: logoAlt
    }),

	computed: {
		logoChange() {
			return this.alt === true ? logoAlt : logo
		}
	}
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