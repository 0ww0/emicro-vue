<template>
    <wrapper class="basic-information">
        <navbar />
        <flexStart>
            <div class="navigation">
                <div class="navi-group">
                    <p class="dot"></p>
                    <p class="dot"></p>
                    <p class="dot"></p>
                    <p class="dot active"></p>
                    <p class="text">Other Information</p>
                </div>
            </div>
            <div class="form-holder">
                <formW>
                    <div class="form-control">
                        <p class="title">Bank Account Information</p>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.bank ? 'form-error' : '' ]">
                            <p>Bank</p>
                            <input v-model="field.bank" type="text" placeholder="Bank">
                            <p v-if="validate.bank" class="validate">{{ validate.bank_text }}</p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.account_no ? 'form-error' : '' ]">
                            <p>Bank Account Number</p>
                            <input v-model="field.account_no" type="text" placeholder="Bank Account Number">
                            <p v-if="validate.account_no" class="validate">{{ validate.account_no_text }}</p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.account_name ? 'form-error' : '' ]">
                            <p>Bank Account Name</p>
                            <input v-model="field.account_name" type="text" placeholder="Bank Account Name">
                            <p v-if="validate.account_name" class="validate">{{ validate.account_name_text }}</p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label>
                            <p>Purpose of Financing</p>
                            <input v-model="field.purpose" type="text" placeholder="Purpose of Financing">
                        </label>
                    </div>

                    <div class="form-control">
                        <br>
                        <hr>
                        <br>
                    </div>

                    <div class="form-control">
                        <p class="title">Authorization &amp; Application</p>
                    </div>

                    <div class="form-control">
                        <label class="form-checkbox">
                            <input v-model="field.authorization" type="checkbox">
                            <p class="checkbox-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, a dolores voluptatum accusamus tempora obcaecati, rem autem placeat, repellat itaque dolorem explicabo vero provident asperiores repellendus molestiae inventore. Voluptate, corporis!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cupiditate mollitia voluptatibus neque iusto nostrum inventore exercitationem odio amet, iure excepturi delectus consectetur, qui temporibus, ad placeat ipsum maxime voluptate?
                            </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <br>
                        <hr>
                        <br>
                    </div>

                    <div class="form-control">
                        <p class="title">Disbursement Of Loan</p>
                    </div>

                    <div class="form-control">
                        <label class="form-checkbox">
                            <input v-model="field.disbursement" type="checkbox">
                            <p class="checkbox-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, a dolores voluptatum accusamus tempora obcaecati, rem autem placeat, repellat itaque dolorem explicabo vero provident asperiores repellendus molestiae inventore. Voluptate, corporis!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cupiditate mollitia voluptatibus neque iusto nostrum inventore exercitationem odio amet, iure excepturi delectus consectetur, qui temporibus, ad placeat ipsum maxime voluptate?
                            </p>
                        </label>
                    </div>

                </formW>
            </div>
            <div class="form-button">
                <button class="submit">
                    Submit
                </button>
            </div>
        </flexStart>
    </wrapper>
</template>

<script>
import wrapper from './../../../../../../components/wrapper/Section'
import navbar from './../../../../../../components/navbar/primary/Back'
import flexStart from './../../../../../../components/wrapper/FlexStart'
import formW from './../../../../../../components/wrapper/Form'

export default {
    components : {
        wrapper,
        navbar,
        flexStart,
        formW
    },

    data: () => ({
		validate : {
            bank: false,
            bank_text: "",
            account_no: false,
            account_no_text: "",
            account_name: false,
            account_name_text: "",
            authorization: false,
            authorization_text: "",
            disbursement: false,
            disbursement_text: ""
		}
    }),

    computed: {
		public_url () {
			return window.location.origin
		},

        field () {
            return this.$store.getters.field;
        },

        isLoading () {
            return this.$store.getters.isLoading;
        },

        errors () {
            return this.$store.getters.errors;
        }
    },

	methods: {
		validation () {
			if(this.field.bank === '') {
				this.validate.bank = true;
				this.validate.bank_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.bank = false;
				this.validate.bank_text = '';
			}
		
			if(this.field.account_no === '') {
				this.validate.account_no = true;
				this.validate.account_no_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.account_no = false;
				this.validate.account_no_text = '';
			}

            if(this.field.account_name === '') {
				this.validate.account_name = true;
				this.validate.account_name_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.account_name = false;
				this.validate.account_name_text = '';
			}

            if(this.field.authorization === '') {
				this.validate.authorization = true;
				this.validate.authorization_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.authorization = false;
				this.validate.authorization_text = '';
			}

            if(this.field.disbursement === '') {
				this.validate.disbursement = true;
				this.validate.disbursement_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.disbursement = false;
				this.validate.disbursement_text = '';
			}

			return true
		},

		onSubmit () {
			if(!this.validation()) {
                return
            }
		}
	}
}
</script>

<style lang="scss" scoped>
	.navigation {
        width: 90%;
        padding: 20px 0px;
        margin: 0 auto;

        .navi-group {
            display: flex;
            flex-flow: row nowrap;
            flex-direction: row;
            align-content: center;
            border-radius: 10px;

            width: 100%;
            background-color: #018fc3;
            color: #ffffff;
            padding: 5px 10px;

            .dot {
                width: 8px;
                height: 8px;
                background-color: #ffffff;
                opacity: .5;
                border-radius: 100%;
                align-self: center;

                &.active {
                    opacity: 1;
                }

                &:not(:last-child) {
                     margin-right: 10px;
                }
            }

            .text {
                margin-right: auto;
                font-size: 12px;
            }
        }
    }

    .form-holder {
        width: 90%;
        margin: 0 auto 20px;
        padding: 20px;
        border-radius: 4px;
        background-color: #ffffff;
        height: 100%;
        overflow: auto;

        .form {
            margin: 0 auto;
        }
    }

    .form-checkbox {
        display: flex;
        flex-flow: row nowrap;
        flex-direction: row;
        align-content: center;

        input[type='checkbox'] {
            margin-right: 10px;
        }
        .checkbox-text {
            width: calc(100% - 30px);
        }
        
    }

    .form-button {
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
            font-weight: 600;
        }
    }
</style>