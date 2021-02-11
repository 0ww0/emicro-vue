<template>
	<wrapper class="my-account">
		<navbar />
		<flexBottom>
			<div class="title-holder">
				<p>My Loan</p>
			</div>
			<bkContent>
				
			</bkContent>
		</flexBottom>
		<botbar />
	</wrapper>
</template>

<script>
import navbar from './../../../../components/navbar/primary/Logo'
import wrapper from './../../../../components/wrapper/Section'
import flexBottom from './../../../../components/wrapper/FlexBottom'
import botbar from './../../../../components/navbar/Bottom'
import bkContent from './../../../../components/wrapper/BackgroundContent'

export default {
  	components: { 
	  	wrapper, 
	  	navbar,
		flexBottom,
		botbar,
		bkContent
	},
}
</script>

<style lang="scss" scoped>
	.title-holder {
		width: 100%;
		font-size: 16px;
		font-weight: 600;
		background-color: #018fc3;
        color: #ffffff;
		padding: 15px 20px;
	}
</style>