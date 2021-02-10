<template>
    <formW>
        <notification v-if="errors" :message="errors" />
        
        <div class="form-control">
            <p class="title">Set Up Your Account</p>
        </div>

        <div class="form-control">
            <label :class="[ validate.mobile ? 'form-error' : '' ]">
                <p>Password</p>
                <input v-model="field.mobile" type="text" name="password" placeholder="Enter password">
                <p v-if="validate.mobile" class="validate"> {{ validate.mobile_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <label :class="[ validate.mobile ? 'form-error' : '' ]">
                <p>Re-enter the password</p>
                <input v-model="field.mobile" type="text" name="password" placeholder="Re-enter the password">
                <p v-if="validate.mobile" class="validate"> {{ validate.mobile_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <label :class="[ validate.mobile ? 'form-error' : '' ]">
                <p>Email address</p>
                <input v-model="field.mobile" type="text" name="mobile" placeholder="Enter email address">
                <p v-if="validate.mobile" class="validate"> {{ validate.mobile_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <label :class="[ validate.mobile ? 'form-error' : '' ]">
                <p>Referral code (optional)</p>
                <input v-model="field.mobile" type="text" name="mobile" placeholder="Enter referral code">
                <p v-if="validate.mobile" class="validate"> {{ validate.mobile_text }} </p>
            </label>
        </div>

        <div class="form-control">
            <p class="term">Click the 'Sign Up' button, Agree to <a :href="public_url + '/'">Emicro Loan Services</a> and <a :href="public_url + '/'">Privacy Policy</a>.</p>
        </div>

        <div class="form-control">
            <button :disabled="isLoading" :class="isLoading ? 'is-loading' : ''" class="submit" @click = "onNext()">
                Next
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
    .term {
        font-size: 12px;

        a{
            color: #018fc3;
        }
    }
</style>