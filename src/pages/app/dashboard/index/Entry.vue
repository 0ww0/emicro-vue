<template>
	<wrapper class="my-account">
		<navbar />
		<flexBottom>
			<div class="title-holder">
				<p>Hi, Melvin Lee</p>
				<p>#GEM123456789</p>
			</div>
			<bkContent>
				<div class="content-title">
					<p>Available Finance Limit</p>
				</div>
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
		font-size: 14px;
		font-weight: 600;
		background-color: #018fc3;
        color: #ffffff;
		padding: 15px 20px;

		p:not(:last-child) {
			font-size: 16px;
			margin-bottom: 5px;
		}
	}

	.content{
		&-title {
			font-size: 18px;
			font-weight: 600;
		}
	}
</style>