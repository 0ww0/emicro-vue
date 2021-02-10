<template>
    <wrapper class="forgot">
		<navbar/>
		<div class="flex-holder">
			<div class="form">
				<notification v-if="errors" :message="errors" />
				<div class="form-control">
					<p class="title">Forgot Password?</p>
				</div>
				<div class="form-control">
					<label :class="[ validate.phone ? 'form-error' : '' ]">
						<p>Mobile Number</p>
						<input v-model="field.phone" type="tel" name="phone" placeholder="Enter mobile number">
						<p v-if="validate.phone" class="validate"> {{ validate.phone_text }} </p>
					</label>
				</div>
				<div class="form-control">
					<label :class="[ validate.verified ? 'form-error' : '' ]">
						<p>SMS verification</p>
						<div class="form-input">
							<input v-model="field.verified" type="tel" name="verified" placeholder="Enter SMS verification">
							<button class="verified">
								Get The Verification Code
							</button>
						</div>
						<p v-if="validate.verified" class="validate"> {{ validate.verified_text }} </p>
					</label>
				</div>
				<div class="form-control">
					<label :class="[ validate.password ? 'form-error' : '' ]">
						<p>Password</p>
						<input v-model="field.password" type="password" name="password" placeholder="Enter password">
						<p class="pass-info">Password length 6-16 numbers and alphabet</p>
						<p v-if="validate.password" class="validate"> {{ validate.password_text }} </p>
					</label>
				</div>
				<div class="form-control">
					<label :class="[ validate.password ? 'form-error' : '' ]">
						<p>Re-enter the password</p>
						<input v-model="field.password" type="password" name="password" placeholder="Re-enter the password">
						<p v-if="validate.password" class="validate"> {{ validate.password_text }} </p>
					</label>
				</div>
				<div class="form-control">
					<button :disabled="isLoading" :class="isLoading ? 'is-loading' : ''" class="submit" @click = "onSubmit()">
						Reset Immediately
					</button>
				</div>
			</div>
		</div>
	</wrapper>
</template>

<script>
import notification from './../../../components/Notification'
import navbar from './components/Navbar'
import wrapper from './../../../components/Wrapper'

export default {
    name: "Login",

    components: {
        notification,
        navbar,
		wrapper
    },

    data: () => ({
        
    }),

    computed: {
        field () {
            return this.$store.getters.field;
        },

        validate () {
            return this.$store.getters.validate;
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
            let validate = {
                phone: false,
                phone_text: '',
                password: false,
                password_text: ''
            }

			if (this.field.phone === '') {
				this.validate.phone = true
                this.validate.phone_text = "Field cannnot be blank"
			} else {
				this.validate.phone = false
                this.validate.phone_text = ""
			}

            if(this.field.phone !== '') {
                let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gmi;
                if(!regex.test(this.field.phone)){
                    this.validate.phone = true;
                    this.validate.phone_text = 'Please provide a valid phone number. Ex: 60123456789 / 0123456789'
                    return false
                }
            } else {
                this.validate.phone = false;
                this.validate.phone_text = '';
            }

			if (this.field.password === '') {
				this.validate.password = true
                this.validate.password_text = "Field cannnot be blank"
			} else {
				this.validate.password = false
                this.validate.password_text = ""
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
    @import "./../../../assets/style/config";

	.flex-holder {
		display: flex;
		flex-flow: column nowrap;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		width: 100%;
		height: calc(100% - 60px);
	}

	.form {
		width: 100%;
		max-width: 280px;
		margin: 20px auto;
	}

	.form-control {
		width: 100%;
		margin-bottom: 10px;
        &:last-child {
		    margin-bottom: 0;
	    }

        p {
            margin-bottom: 10px;
        }

		p.pass-info {
			color: #868686;
			font-size: 12px;
			padding: 5px;
			margin-bottom: 0;
		}

		p.title {
			font-weight: 600;
			font-size: 18px;
		}

        input {
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid;
            border-color: #adadad;
            outline: none;
            font-size: 14px;
        }

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

	.form-input {
		display: flex;
		flex-flow: row nowrap;
		flex-direction: row;
		
		input {
			width: calc(70% - 5px);
			margin-right: 5px;
		}

		button.verified {
			width: 30%;
			font-size: 8px;
			padding: 4px;
			border-radius: 4px;
            border: 0;
            cursor: pointer;
            text-transform: uppercase;
            outline: none;
            background-color: #018fc3;
            color: #ffffff;
            font-weight: 600;
		}
	}

	.form-error {
        input {
		    border-color: #ca2e2e;
	    }
        
        p.validate {
            color: #ca2e2e;
		    font-size: 12px;
		    padding: 5px;
        }
    }
</style>