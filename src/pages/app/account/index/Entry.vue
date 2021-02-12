<template>
	<wrapper class="my-account">
		<navbar />
		<flexBottom>
			<div class="title-holder">
				<p>How It Work</p>
			</div>
			<bkContent>
				<linkLogo v-for = "data in linkLogo" :key="data.id" :text="data.text" :url="data.url" />
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
import linkLogo from './../../../../components/LinkLogo'

export default {
  	components: { 
	  	wrapper, 
	  	navbar,
		flexBottom,
		botbar,
    	bkContent,
		linkLogo
	},

	data: () => ({
        linkLogo : [
			{
				id: 1,
				text: "Rate Description",
				urL: "/"
			},
			{
				id: 2,
				text: "Frequently Asked Question",
				urL: "/"
			},
			{
				id: 3,
				text: "Feedback",
				urL: "/"
			},
			{
				id: 4,
				text: "About Emicro",
				urL: "/"
			},

			{
				id: 5,
				text: "Privacy Policy",
				urL: "/"
			},

			{
				id: 6,
				text: "Terms of Services",
				urL: "/"
			},

			{
				id: 7,
				text: "Setting",
				urL: "/"
			},

		]
    }),
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