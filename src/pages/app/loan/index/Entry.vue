<template>
	<wrapper class="my-account">
		<navbar />
		<flexBottom>
			<div class="title-holder">
				<p>My Loan</p>
			</div>
			<bkContent>
				<div v-if="loan" class="loan-application">
					<div class="loan-date">
						<p>01/02/2021</p>
					</div>
					<div class="loan-data">
						<p>Application number</p>
						<p>#12345</p>
					</div>
					<div class="loan-data">
						<p>Finance amount</p>
						<p>RM 500.00</p>
					</div>
					<div class="loan-status">
						<div class="loan-data">
							<p>Application Status</p>
							<p class='progress'>
								In the progress
							</p>
						</div>
						<div class="loan-data">
							<p>Application Status</p>
							<p class="approved">
								Your loan has been approved
							</p>
						</div>
						<div class="loan-data">
							<p>Application Status</p>
							<p class="approved">
								In the process for loan release
							</p>
						</div>
					</div>
					<div class="loan-done">
						<div class="loan-data">
							<p>Loan Status</p>
							<p>Salary deduction</p>
						</div>
						<div class="loan-data">
							<p>Loan disbursement date</p>
							<p>22/02/2021</p>
						</div>
						<div class="loan-data">
							<p>Due Date</p>
							<p>Next salary date</p>
						</div>
					</div>
					
					<div class="loan-approved">
						<div class="title">
							Congratulations, your loan approved
						</div>
						<div class="content">
							<p>We have sent the results to your email address [email] for verification. Please follow the instructions on your email to complete the verification.</p>
							<p>If you did not receive the email, please check your junk box or click to resend,</p>
						</div>
						<div class="link">
							<a href="#">Modify Email Address</a>
							<a href="#">Resend</a>
						</div>
					</div>

					<div class="loan-agreement">
						<div class="title">
							Congratulations, your loan approved
						</div>
						<div class="content">
							<p>Your email verification has been confirm. Please proceed to the loan agreement signature and identity verification. Thank you.</p>
						</div>
						<div class="button">
							<button class="submit">
                    			Proceed to Loan Agreement
                			</button>
						</div>
					</div>

					<div class="loan-release">
						<div class="title">
							Congratulations, your loan approved
						</div>
						<div class="content">
							<p>Your loan application has been completed, please wait for loan release.</p>
						</div>
					</div>
				</div>
				
				<div v-else class="no-application">
					<p>No Application</p>
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
	data: () => ({
		loan: true,
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

	.no-application {
		height: 150px;
	}

	.loan-application {
		font-size: 14px;

		.loan-date {
			font-weight: bold;
			padding-bottom: 10px;
		}

		.loan-data {
			display: flex;
			flex-direction: row;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-content: center;

			&:not(:last-child) {
				padding-bottom: 10px;
			}

			p {
				&:last-child {
					font-weight: bold;
					width: 50%;
					text-align: right;
				}

				&.progress {
					color: #018fc3;
				}

				&.approved {
					color: green;
				}
			}
		}
	}

	.loan-approved {
		padding-top: 30px;
		.title {
			font-weight: bold;
			padding-bottom: 10px;
		}

		.content {
			padding-bottom: 10px;
			line-height: 1.5;
			p {
				&:not(:last-child){
					padding-bottom: 10px;
				}
			}
		}

		.link {
			display: flex;
			flex-flow: row nowrap;
			flex-direction: row;
			align-content: center;
			justify-content: space-between;
			color: #018fc3;
		}
	}

	.loan-agreement {
		padding-top: 30px;
		.title {
			font-weight: bold;
			padding-bottom: 10px;
		}

		.content {
			padding-bottom: 10px;
			line-height: 1.5;
			p {
				&:not(:last-child){
					padding-bottom: 10px;
				}
			}
		}

		.button {
			width: 100%;
			max-width: 280px;
			margin: 0 auto 20px;
			
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
				font-size: 12px;
				font-weight: 600;
			}
		}
	}

	.loan-release {
		padding-top: 30px;
		.title {
			font-weight: bold;
			padding-bottom: 10px;
		}

		.content {
			padding-bottom: 10px;
			line-height: 1.5;
			p {
				&:not(:last-child){
					padding-bottom: 10px;
				}
			}
		}
	}

	.loan-status {
		padding-bottom: 10px;
	}
</style>