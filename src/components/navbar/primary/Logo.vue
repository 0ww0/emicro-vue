<template>
    <div class="navbar">
        <logo small alt/>
	</div>
</template>

<script>
import logo from './../../Logo'

export default {
    name: "Navbar",

	components: {
		logo
	},
}
</script>

<style lang="scss" scoped>
	.navbar {
		width: 100%;
		height: 60px;
		display: flex;
		flex-flow: row nowrap;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding: 10px 20px;
        background-color: #018fc3;
        color: #ffffff;
	}
</style>