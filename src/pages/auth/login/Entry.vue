<template>
    <section class="login-wrapper">
		<navbar/>
		<div class="flex-holder">
			<logo/>
			<div class="form">
				<notification v-if="errors" :message="errors" />
				<div class="form-control">
					<label :class="[ validate.phone ? 'form-error' : '' ]">
						<p>Mobile Number</p>
						<input v-model="field.phone" type="tel" name="phone" placeholder="Enter mobile number">
						<p v-if="validate.phone" class="validate"> {{ validate.phone_text }} </p>
					</label>
				</div>
				<div class="form-control">
					<label :class="[ validate.password ? 'form-error' : '' ]">
						<p>Password</p>
						<input v-model="field.password" type="password" name="password" placeholder="Enter password">
						<p v-if="validate.password" class="validate"> {{ validate.password_text }} </p>
					</label>
				</div>
				<div class="link-text">
					<a :href="public_url + '/auth/forgot.html'">Forgot Password?</a>
				</div>
				<div class="form-control">
					<button :disabled="isLoading" :class="isLoading ? 'is-loading' : ''" @click = "onSubmit()">
						Log in
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import notification from './../../../components/Notification'
import navbar from './../../../components/Navbar'
import logo from './../../../components/Logo'

export default {
    name: "Login",

    components: {
        notification,
        navbar,
		logo
    },

    data: () => ({
    }),

    computed: {
		public_url () {
			return window.location.origin
		},

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

            this.$store.dispatch('updateStateObject', {
                 key : 'validate',
                 value : validate
            });
            
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

    .login-wrapper {
		width: 100%;
		height: 100vh;
		font-size: 14px;
	}
	
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

        input {
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid;
            border-color: #adadad;
            outline: none;
            font-size: 14px;
        }

        button {
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

	.link-text {
		padding: 10px;
		margin-bottom: 10px;
		text-align: center;
		color: #018fc3;
	}
</style>