<template>
	<wrapper class='policy'>
		<navbar />
		<div class="text-holder">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora animi omnis tenetur, velit suscipit illum minus maxime atque inventore soluta mollitia a, aliquam quam quia alias saepe nesciunt autem.
		</div>
	</wrapper>
</template>

<script>
import navbar from './components/Navbar.vue'
import wrapper from './../../../components/Wrapper'

export default {
  	components: { 
	  	navbar,
		wrapper
	},

}
</script>

<style lang="scss" scoped>
	@import "./../../../assets/style/config";

	.text-holder {
		width: 100%;
		padding: 20px;
	}
</style>