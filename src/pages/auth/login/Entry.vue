<template>
    <wrapper class='login'>
		<navbar />
		<flexCenter>
			<logo center/>
			<formW>
				<notification v-if="errors" :message="errors" />

				<div class="form-control">
					<label :class="[ validate.mobile ? 'form-error' : '' ]">
						<p>Mobile Number</p>
						<input v-model="field.mobile" type="text" name="mobile" placeholder="Enter mobile number">
						<p v-if="validate.mobile" class="validate"> {{ validate.mobile_text }} </p>
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
					<button :disabled="isLoading" :class="isLoading ? 'is-loading' : ''" class="submit"  @click = "onSubmit()">
						Log in
					</button>
				</div>

			</formW>
		</flexCenter>
	</wrapper>
</template>

<script>
import notification from './../../../components/Notification'
import navbar from './../../../components/navbar/Button'
import logo from './../../../components/Logo'
import wrapper from './../../../components/wrapper/Section'
import formW from './../../../components/wrapper/Form'
import flexCenter from './../../../components/wrapper/FlexCenter'

export default {
    name: "Login",

    components: {
        notification,
        navbar,
		logo,
        wrapper,
        formW,
        flexCenter
    },

    data: () => ({
		validate: {
            mobile: false,
            mobile_text: "",
            password: false,
            password_text: ""
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
}
</script>

<style lang="scss" scoped>
	.link-text {
		padding: 10px;
		margin-bottom: 10px;
		text-align: center;
		color: #018fc3;
	}

	.logo-holder {
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>