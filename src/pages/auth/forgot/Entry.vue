<template>
    <wrapper class="forgot">
		<navbar/>
		<flexCenter>
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

			</formW>
		</flexCenter>
	</wrapper>
</template>

<script>
import notification from './../../../components/Notification'
import navbar from './../../../components/navbar/default/Back'
import wrapper from './../../../components/wrapper/Section'
import formW from './../../../components/wrapper/Form'
import flexCenter from './../../../components/wrapper/FlexCenter'

export default {
    name: "Forgot",

    components: {
        notification,
        navbar,
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
        field () {
            return this.$store.getters.field;
        },

        isLoading () {
            return this.$store.getters.isLoading;
        },

        errors () {
            return this.$store.getters.errors;
        }
    }
}
</script>