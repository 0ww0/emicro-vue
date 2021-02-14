<template>
    <wrapper class="basic-information">
        <navbar />
        <flexStart>
            <div class="navigation">
                <div class="navi-group">
                    <p class="dot active"></p>
                    <p class="text">Basic Information</p>
                    <p class="dot"></p>
                    <p class="dot"></p>
                    <p class="dot"></p>
                </div>
            </div>
            <div class="form-holder">
                <formW>
                    <div class="form-control">
                        <p class="title">Personal Information</p>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.name ? 'form-error' : '' ]">
                            <p>Name</p>
                            <input v-model="field.name" type="text" placeholder="Name">
                            <p v-if="validate.name" class="validate"> {{ validate.name_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.nric ? 'form-error' : '' ]">
                            <p>NRIC number</p>
                            <input v-model="field.nric" type="text" placeholder="NRIC number">
                            <p v-if="validate.nric" class="validate"> {{ validate.nric_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.dob ? 'form-error' : '' ]">
                            <p>Date of birth</p>
                            <input v-model="field.dob" type="text" placeholder="Date of Birth">
                            <p v-if="validate.dob" class="validate"> {{ validate.dob_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.gender ? 'form-error' : '' ]">
                            <p>Gender</p>
                            <input v-model="field.gender" type="text" placeholder="Gender">
                            <p v-if="validate.gender" class="validate"> {{ validate.gender_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.race ? 'form-error' : '' ]">
                            <p>Race</p>
                            <input v-model="field.race" type="text" placeholder="Race">
                            <p v-if="validate.race" class="validate"> {{ validate.race_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.maritial ? 'form-error' : '' ]">
                            <p>Maritial status</p>
                            <input v-model="field.maritial" type="text" placeholder="Maritial Status">
                            <p v-if="validate.maritial" class="validate"> {{ validate.maritial_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.education ? 'form-error' : '' ]">
                            <p>Education status</p>
                            <input v-model="field.education" type="text" placeholder="Education Status">
                            <p v-if="validate.education" class="validate"> {{ validate.education_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <br>
                        <hr>
                        <br>
                    </div>

                    <div class="form-control">
                        <p class="title">Current Residential Address</p>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.address_line_1 ? 'form-error' : '' ]">
                            <p>Address line 1</p>
                            <input v-model="field.address_line_1" type="text" placeholder="Address line 1">
                            <p v-if="validate.address_line_1" class="validate"> {{ validate.address_line_1_text }} </p>
                        </label>
                    </div>
                    
                    <div class="form-control">
                        <label :class="[ validate.address_line_2 ? 'form-error' : '' ]">
                            <p>Address line 2</p>
                            <input v-model="field.address_line_2" type="text" placeholder="Address line 2">
                            <p v-if="validate.address_line_2" class="validate"> {{ validate.address_line_2_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.postcode ? 'form-error' : '' ]">
                            <p>Postcode</p>
                            <input v-model="field.postcode" type="text" placeholder="Postcode">
                            <p v-if="validate.postcode" class="validate"> {{ validate.postcode_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.state ? 'form-error' : '' ]">
                            <p>State</p>
                            <input v-model="field.state" type="text" placeholder="State">
                            <p v-if="validate.state" class="validate"> {{ validate.state_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.city ? 'form-error' : '' ]">
                            <p>City</p>
                            <input v-model="field.city" type="text"  placeholder="City">
                            <p v-if="validate.city" class="validate"> {{ validate.city_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <br>
                        <hr>
                        <br>
                    </div>

                    <div class="form-control">
                        <p class="title">Email Address</p>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.email ? 'form-error' : '' ]">
                            <p>Email Address</p>
                            <input v-model="field.email" type="text" placeholder="Email Address">
                            <p v-if="validate.email" class="validate"> {{ validate.email_text }} </p>
                        </label>
                    </div>
                </formW>
            </div>
            <div class="form-button">
                <button class="submit" @click="onSubmit()">
                    Next
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
            name: false,
			name_text: "",
            nric: false,
            nric_text: "",
            dob: false,
            dob_text: "",
            gender: false,
            gender_text: "",
            race: false,
            race_text: "",
            maritial: false,
            maritial_text: "",
            education: false,
            education_text: "",
            address_line_1: false,
            address_line_1_text: "",
            address_line_2: false,
            address_line_2_text: "",
            postcode: false,
            postcode_text: "",
            state: false,
            state_text: "",
            city: false,
            city_text: "",
            email: false,
            email_text: ""
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
			if(this.field.name === '') {
				this.validate.name = true;
				this.validate.name_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.name = false;
				this.validate.name_text = '';
			}
		
			if(this.field.nric === '') {
				this.validate.nric = true;
				this.validate.nric_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.nric = false;
				this.validate.nric_text = '';
			}

            if(this.field.dob === '') {
				this.validate.dob = true;
				this.validate.dob_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.dob = false;
				this.validate.dob_text = '';
			}

            if(this.field.gender === '') {
				this.validate.gender = true;
				this.validate.gender_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.gender = false;
				this.validate.gender_text = '';
			}

            if(this.field.race === '') {
				this.validate.race = true;
				this.validate.race_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.race = false;
				this.validate.race_text = '';
			}

            if(this.field.maritial === '') {
				this.validate.maritial = true;
				this.validate.maritial_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.maritial = false;
				this.validate.maritial_text = '';
			}

            if(this.field.education === '') {
				this.validate.education = true;
				this.validate.education_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.education = false;
				this.validate.education_text = '';
			}

            if(this.field.address_line_1 === '') {
				this.validate.address_line_1 = true;
				this.validate.address_line_1_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.address_line_1 = false;
				this.validate.address_line_1_text = '';
			}

            if(this.field.address_line_2 === '') {
				this.validate.address_line_2 = true;
				this.validate.address_line_2_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.address_line_2 = false;
				this.validate.address_line_2_text = '';
			}

            if(this.field.postcode === '') {
				this.validate.postcode = true;
				this.validate.postcode_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.postcode = false;
				this.validate.postcode_text = '';
			}

            if(this.field.state === '') {
				this.validate.state = true;
				this.validate.state_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.state = false;
				this.validate.state_text = '';
			}

            if(this.field.city === '') {
				this.validate.city = true;
				this.validate.city_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.city = false;
				this.validate.city_text = '';
			}

            if(this.field.email === '') {
				this.validate.email = true;
				this.validate.email_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.email = false;
				this.validate.email_text = '';
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