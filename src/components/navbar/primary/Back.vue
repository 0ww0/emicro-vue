<template>
    <div class="navbar">
		<div class="link-atag">
			<a :href="public_url + '/auth/login.html'">
				<ph-caret-left :size = "16" />
				<span>Back</span>
			</a>
        </div>
        <logo centerBack small alt/>
	</div>
</template>

<script>
import logo from './../../Logo'
import { PhCaretLeft } from "phosphor-vue"

export default {
    name: "Navbar",

	components: {
		logo,
		PhCaretLeft
	},

	computed: {
		public_url () {
			return window.location.origin
		},
	}
}
</script>

<style lang="scss" scoped>
	.navbar {
		width: 100%;
		height: 60px;
		display: flex;
		flex-flow: row nowrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
        background-color: #018fc3;
        color: #ffffff;
	}

	.link-atag {
		width: 75px;
		a {
			font-weight: 600;
			svg, span {
				display: inline-block;
				vertical-align: middle;
			}
		}
	}
</style>