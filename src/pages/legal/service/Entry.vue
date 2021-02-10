<template>
	<wrapper class='service'>
		<navbar />
		<div class="text-holder">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tempora animi omnis tenetur, velit suscipit illum minus maxime atque inventore soluta mollitia a, aliquam quam quia alias saepe nesciunt autem.
		</div>
	</wrapper>
</template>

<script>
import navbar from './../../../components/navbar/default/Back'
import wrapper from './../../../components/wrapper/Section'

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