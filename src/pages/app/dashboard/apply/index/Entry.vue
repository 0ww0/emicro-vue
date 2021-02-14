<template>
    <wrapper class="apply-now">
        <navbar url="/app/dashboard/index.html"/>
        <flexStart>
            <div class="title-holder">
				<p>Apply Now</p>
			</div>
            <bkContent>
				<div class="content-title">
					<p>Finance Amount</p>
				</div>
				<div class="content-value">
					<span>RM</span>
					<span> {{ value }}</span>
				</div>
                <div class="content-data">
                    <div class="data-holder">
                        <p>Financing tenure(Next Salary Pay Date)</p>
                        <p>3 months</p>
                    </div>
                    <div class="data-holder">
                        <p>Profit rate per month</p>
                        <p>0%</p>
                    </div>
                    <div class="data-holder">
                        <p>Processing rate</p>
                        <p>2.5% - 3%</p>   
                    </div> 
                    <div class="data-holder">
                        <p>Processing fee</p>
                        <p>RM 60.00</p>   
                    </div> 
                    <div class="data-holder">
                        <p>Salary deduction amount</p>
                        <p>RM 522.50</p>   
                    </div> 
                </div>
                <div class="content-refund">
                    <p>
                        A non-refundable processing fee of RM60.00 shall be payable by you on approval of the application. The Processing Fee shall be deducted from the loan amount before the loan is released to you.
                    </p>
                </div>
				<div class="content-button">
					<button class="submit">
						Apply For Loan
					</button>
				</div>
			</bkContent>
        </flexStart>
    </wrapper>
</template>

<script>
import wrapper from './../../../../../components/wrapper/Section'
import navbar from './../../../../../components/navbar/primary/Back'
import flexStart from './../../../../../components/wrapper/FlexStart'
import bkContent from './../../../../../components/wrapper/BackgroundContent'

export default {
    components : {
        wrapper,
        navbar,
        flexStart,
        bkContent
    },

    data: () => ({
		value: "100"
	}),
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

		&-data {
            width: 100%;

            .data-holder {
                display: flex;
                flex-flow: row nowrap;
                flex-direction: row;
                justify-content: space-between;
                font-size: 12px;
                padding: 5px;

                p {
                    line-height: 1.5;
                    font-weight: bold;
                    &:not(:last-child) {
                        width: 70%;
                        font-weight: bold;
                    }
                }
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

        &-refund {
            padding: 5px;
            color: red;
            font-size: 12px;
        }
	}

</style>