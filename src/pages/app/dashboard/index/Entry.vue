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
				<div class="content-value">
					<span>RM</span>
					<span> {{ value }}</span>
				</div>
				<div class="content-slider">
					<input type="range" min="0" max="1000" v-model="value" step="0" />
				</div>
				<div class="content-button">
					<button class="submit">
						Apply Now
					</button>
				</div>
			</bkContent>
			<div class="link-holder">
				<a :href="public_url + '/app/dashboard/disclosure.html'">Product Disclosure Sheet <ph-caret-double-right :size="14" /></a>
			</div>
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
import { PhCaretDoubleRight } from "phosphor-vue"

export default {
  	components: { 
	  	wrapper, 
	  	navbar,
		flexBottom,
		botbar,
		bkContent,
		PhCaretDoubleRight
	},

	data: () => ({
		value: "100"
	}),

	computed: {
		public_url () {
			return window.location.origin
		},
	}
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

		&-value {
			font-size: 32px;
			text-align: center;
			font-weight: 600;
			color: #f7941e;
			padding: 20px;
		}

		&-slider {
			width: 100%;
			padding: 10px;
			input {
				width: 100%;
				appearance: none;
				outline: none;
				height: 8px;
				border-radius: 4px;
				background: #d3d3d3;
			}

			input::-webkit-slider-thumb {
				-webkit-appearance: none;
				appearance: none;
				width: 25px;
				height: 25px;
				border-radius: 50%;
				background: #f7941e;
				cursor: pointer;
			}

			input::-moz-range-thumb {
				width: 25px;
				height: 25px;
				border-radius: 50%;
				background: #f7941e;
				cursor: pointer;
			}
		}

		&-button {
			width: 100%;
			max-width: 280px;
			margin: 30px auto 0;
			
			button.submit {
				width: 100%;
				padding: 12px;
				border-radius: 4px;
				border: 0;
				cursor: pointer;
				text-transform: uppercase;
				outline: none;
				background-color: #f7941e;
				color: #ffffff;
				font-weight: 600;
        	}
		}
	}

	.link-holder {
		padding: 20px;
		text-align: center;
		font-size: 14px;
		color: #018fc3;
	}
</style>