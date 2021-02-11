<template>
	<wrapper class="my-account">
		<navbar />
		<flexBottom>
			<div class="title-holder">
				<p>How It Work</p>
			</div>
			<bkContent>
				<div class="content-title">
					<p>Requirements</p>
				</div>
				<div class="content-text">
					<p>We're so flexible, anyone can apply with us</p>
					<p>With basic requirements as the one below, getting immediate and legal financial backup is no longer a long shot. Our basic requirement are: </p>
				</div>
				<div class="content-list">
					<ul>
						<li>
							<span class="list-image">
								<img :src="tick" alt="">
							</span>
							<span class='list-text'>
								You must be between 21 - 50 years old
							</span> 	
						</li>
						<li>
							<span class="list-image">
								<img :src="tick" alt="">
							</span>
							<span class='list-text'>
								You must be a Malaysian citizen with a valid Malaysian identity card (NRIC)
							</span> 
						</li>
						<li>
							<span class="list-image">
								<img :src="tick" alt="">
							</span>
							<span class='list-text'>
								You must own your bank account
							</span> 
						</li>
						<li>
							<span class="list-image">
								<img :src="tick" alt="">
							</span>
							<span class='list-text'>
								YOU MUST NOT be blacklisted by CCRIS  &amp; CTOS
							</span> 
						</li>
						<li>
							<span class="list-image">
								<img :src="tick" alt="">
							</span>
							<span class='list-text'>
								You must be earning RM1500 and above every month
							</span> 
						</li>
					</ul>
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
import tick from './../../../../assets/image/tick.png'

export default {
	data: () => ({
       tick: tick
    }),

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

	.content{
		&-title {
			font-size: 16px;
			font-weight: 600;
			padding-bottom: 10px;
		}

		&-text{
			font-size: 14px;

			p {
				&:not(:last-child){
					padding-bottom: 10px;
				}
			}
		}

		&-list {
			font-size: 12px;
			padding: 20px 0;

			ul {
				list-style-position: outside;
				list-style-type: none;

				li {
					padding-bottom: 5px;
				}
			}
		}
	}

	.list-image {
		display: inline-block;
		vertical-align: middle;
		width: 20px;
		margin-right: 5px;
	}

	.list-text {
		display: inline-block;
		vertical-align: middle;
		width: calc(100% - 40px);
		line-height: 1.5;
	}
</style>