<template>
    <wrapper class="forgot">
		<navbar/>
		<flexStart>
			<formW>
				<notification v-if="errors" :message="errors" />

				<div class="form-control">
					<p class="title">Forgot Password?</p>
				</div>

				<div class="form-control">
					<label :class="[ validate.mobile ? 'form-error' : '' ]">
						<p>Mobile Number</p>
						<input v-model="field.mobile" type="text" name="mobile" placeholder="Enter mobile number">
						<p v-if="validate.mobile" class="validate"> {{ validate.mobile_text }} </p>
					</label>
				</div>

				<div class="form-control">
					<label :class="[ validate.sms_verified ? 'form-error' : '' ]">
						<p>SMS verification</p>
						<div class="form-input">
							<input v-model="field.sms_verified" type="tel" name="verified" placeholder="Enter SMS verification">
							<button class="verified">
								Get The Verification Code
							</button>
						</div>
						<p v-if="validate.sms_verified" class="validate"> {{ validate.sms_verified_text }} </p>
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
					<label :class="[ validate.re_password ? 'form-error' : '' ]">
						<p>Re-enter the password</p>
						<input v-model="field.re_password" type="password" name="password" placeholder="Re-enter the password">
						<p v-if="validate.re_password" class="validate"> {{ validate.re_password_text }} </p>
					</label>
				</div>

				<div class="form-control">
					<button :disabled="isLoading" :class="isLoading ? 'is-loading' : ''" class="submit" @click = "onSubmit()">
						Reset Immediately
					</button>
				</div>

			</formW>
		</flexStart>
	</wrapper>
</template>

<script>
import notification from './../../../components/Notification'
import navbar from './../../../components/navbar/default/Back'
import wrapper from './../../../components/wrapper/Section'
import formW from './../../../components/wrapper/Form'
import flexStart from './../../../components/wrapper/FlexStart'

export default {
    name: "Forgot",

    components: {
        notification,
        navbar,
		wrapper,
		formW,
		flexStart
    },

    data: () => ({
        validate: {
            mobile: false,
            mobile_text: "",
            sms_verified: false,
            sms_verified_text: "",
			password: false,
            password_text: "",
			re_password: false,
            re_password_text: "",
        }
    }),

    computed: {
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
			if(this.field.mobile === '') {
				this.validate.mobile = true;
				this.validate.mobile_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.mobile = false;
				this.validate.mobile_text = '';
			}

			if(this.field.mobile !== '') {
				let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gmi;
				if(!regex.test(this.field.mobile)){
					this.validate.mobile = true;
					this.validate.mobile_text = 'Please provide a valid phone number. Ex: 60123456789 / 0123456789'
					return false
				}
			} else {
				this.validate.mobile = false;
				this.validate.mobile_text = '';
			}

			if(this.field.sms_verified === '') {
				this.validate.sms_verified = true;
				this.validate.sms_verified_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.sms_verified = false;
				this.validate.sms_verified_text = '';
			}
		
			if(this.field.password === '') {
				this.validate.password = true;
				this.validate.password_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.password = false;
				this.validate.password_text = '';
			}

			if(this.field.re_password === '') {
				this.validate.re_password = true;
				this.validate.re_password_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.re_password = false;
				this.validate.re_password_text = '';
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