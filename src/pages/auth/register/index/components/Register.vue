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
            <button :disabled="isLoading" :class="isLoading ? 'is-loading' : ''" class="submit" @click = "onNext()">
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
    },

}
</script>