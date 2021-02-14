<template>
    <formW>
        <notification v-if="errors" :message="errors" />
        
        <div class="form-control">
            <p class="title">Set Up Your Account</p>
        </div>

        <div class="form-control">
            <label :class="[ validate.password ? 'form-error' : '' ]">
                <p>Password</p>
                <input v-model="field.password" type="text" name="password" placeholder="Enter password">
                <p v-if="validate.password" class="validate"> {{ validate.password_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <label :class="[ validate.re_password ? 'form-error' : '' ]">
                <p>Re-enter the password</p>
                <input v-model="field.re_password" type="text" name="password" placeholder="Re-enter the password">
                <p v-if="validate.re_password" class="validate"> {{ validate.re_password_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <label :class="[ validate.email ? 'form-error' : '' ]">
                <p>Email address</p>
                <input v-model="field.email" type="text" name="email" placeholder="Enter email address">
                <p v-if="validate.email" class="validate"> {{ validate.email_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <label :class="[ validate.code ? 'form-error' : '' ]">
                <p>Referral code (optional)</p>
                <input v-model="field.code" type="text" name="code" placeholder="Enter referral code">
                <p v-if="validate.code" class="validate"> {{ validate.code_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <p class="term">Click the 'Sign Up' button, Agree to <a :href="public_url + '/legal/service.html'">Emicro Loan Services</a> and <a :href="public_url + '/legal/policy.html'">Privacy Policy</a>.</p>
        </div>

        <div class="form-control">
            <button :disabled="isLoading" :class="isLoading ? 'is-loading' : ''" class="submit" @click = "onSubmit()">
                Sign Up
            </button>
        </div>
    </formW>
</template>

<script>
import notification from './../../../../../components/Notification'
import formW from './../../../../../components/wrapper/Form'

export default {
    components: {
        notification,
        formW
    },

    data: () => ({
        validate: {
            password: false,
            password_text: "",
            re_password: false,
            re_password_text: "",
            email: false,
            email_text: ""
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
		
			if(this.field.email === '') {
				this.validate.email = true;
				this.validate.email_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.email = false;
				this.validate.email_text = '';
			}

            if(this.field.code === '') {
				this.validate.code = true;
				this.validate.code_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.code = false;
				this.validate.code_text = '';
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
    .term {
        font-size: 12px;

        a{
            color: #018fc3;
        }
    }
</style>