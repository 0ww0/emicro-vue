<template>
    <formW>
        <notification v-if="errors" :message="errors" />
        
        <div class="form-control">
            <p class="title">Set Up Your Account</p>
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
                    <input v-model="field.sms_verified" type="text" name="verified" placeholder="Enter SMS verification">
                    <button class="verified">
                        Get The Verification Code
                    </button>
                </div>
                <p v-if="validate.sms_verified" class="validate"> {{ validate.sms_verified_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <button :disabled="isLoading" :class="isLoading ? 'is-loading' : ''" class="submit" @click="onSubmit()">
                Next
            </button>
        </div>
    </formW>
</template>

<script>
import notification from './../../../../../components/Notification';
import formW from './../../../../../components/wrapper/Form'

export default {
    components: {
        notification,
        formW
    },

    data: () => ({
        validate: {
            mobile: false,
            mobile_text: "",
            sms_verified: false,
            sms_verified_text: ""
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