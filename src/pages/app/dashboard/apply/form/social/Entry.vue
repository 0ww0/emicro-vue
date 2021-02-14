<template>
    <wrapper class="basic-information">
        <navbar url="/app/dashboard/index.html"/>
        <flexStart>
            <div class="navigation">
                <div class="navi-group">
                    <p class="dot"></p>
                    <p class="dot active"></p>
                    <p class="text">Social Information</p>
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
                        <label :class="[ validate.company_name ? 'form-error' : '' ]">
                            <p>Company name</p>
                            <input v-model="field.company_name" type="text" placeholder="Company name">
                            <p v-if="validate.company_name" class="validate"> {{ validate.company_name_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.occupation ? 'form-error' : '' ]">
                            <p>Type of occupation</p>
                            <input v-model="field.occupation" type="text" placeholder="Type of occupation">
                            <p v-if="validate.occupation" class="validate"> {{ validate.occupation_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.position ? 'form-error' : '' ]">
                            <p>Position</p>
                            <input v-model="field.position" type="text" placeholder="Position">
                            <p v-if="validate.position" class="validate"> {{ validate.position_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.industry ? 'form-error' : '' ]">
                            <p>Industry</p>
                            <input v-model="field.industry" type="text" placeholder="Industry">
                            <p v-if="validate.industry" class="validate"> {{ validate.industry_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.office_address ? 'form-error' : '' ]">
                            <p>Office address</p>
                            <input v-model="field.office_address" type="text" placeholder="Office Address">
                            <p v-if="validate.office_address" class="validate"> {{ validate.office_address_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.company_contact ? 'form-error' : '' ]">
                            <p>Company contact number</p>
                            <input v-model="field.company_contact" type="text" placeholder="Company contact number">
                            <p v-if="validate.company_contact" class="validate"> {{ validate.company_contact_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.income ? 'form-error' : '' ]">
                            <p>Monthly income</p>
                            <input v-model="field.income" type="text" placeholder="Monthly income">
                            <p v-if="validate.income" class="validate"> {{ validate.income_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.salary_date ? 'form-error' : '' ]">
                            <p>Salary date</p>
                            <input v-model="field.salary_date" type="text" placeholder="Salary date">
                            <p v-if="validate.salary_date" class="validate"> {{ validate.salary_date_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.year_service ? 'form-error' : '' ]">
                            <p>Years of service</p>
                            <input v-model="field.year_service" type="text" placeholder="Years of service">
                            <p v-if="validate.year_service" class="validate"> {{ validate.year_service_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <br>
                        <hr>
                        <br>
                    </div>

                    <div class="form-control">
                        <p class="title">Emergency Contact 1*</p>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.e_name_1 ? 'form-error' : '' ]">
                            <p>Name</p>
                            <input v-model="field.e_name_1" type="text" placeholder="Name">
                            <p v-if="validate.e_name_1" class="validate"> {{ validate.e_name_1_text }} </p>
                        </label>
                    </div>
                    
                    <div class="form-control">
                        <label :class="[ validate.e_relationship_1 ? 'form-error' : '' ]">
                            <p>Relationship</p>
                            <input v-model="field.e_relationship_1" type="text" placeholder="Relationship">
                            <p v-if="validate.e_relationship_1" class="validate"> {{ validate.e_relationship_1_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.e_mobile_1 ? 'form-error' : '' ]">
                            <p>Mobile number</p>
                            <input v-model="field.e_mobile_1" type="text" placeholder="Mobile number">
                            <p v-if="validate.e_mobile_1" class="validate"> {{ validate.e_mobile_1_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <p class="disclaimer-text">*Emicro will direct reject the application if falsification of emergency information.</p>
                    </div>

                    <div class="form-control">
                        <br>
                        <hr>
                        <br>
                    </div>

                    <div class="form-control">
                        <p class="title">Emergency Contact 2*</p>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.e_name_2 ? 'form-error' : '' ]">
                            <p>Name</p>
                            <input v-model="field.e_name_2" type="text" placeholder="Name">
                            <p v-if="validate.e_name_2" class="validate"> {{ validate.e_name_2_text }} </p>
                        </label>
                    </div>
                    
                    <div class="form-control">
                        <label :class="[ validate.e_relationship_2 ? 'form-error' : '' ]">
                            <p>Relationship</p>
                            <input v-model="field.e_relationship_2" type="text" placeholder="Relationship">
                            <p v-if="validate.e_relationship_2" class="validate"> {{ validate.e_relationship_2_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[ validate.e_mobile_2 ? 'form-error' : '' ]">
                            <p>Mobile number</p>
                            <input v-model="field.e_mobile_2" type="text" placeholder="Mobile number">
                            <p v-if="validate.e_mobile_2" class="validate"> {{ validate.e_mobile_2_text }} </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <p class="disclaimer-text">*Emicro will direct reject the application if falsification of emergency information.</p>
                    </div>
                </formW>
            </div>
            <div class="form-button">
                <button class="submit">
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
            company_name: false,
            company_name_text: "",
            occupation: false,
            occupation_text: "",
            position: false,
            position_text: "",
            industry: false,
            industry_text: "",
            office_address: false,
            office_address_text: "",
            company_contact: false,
            company_contact_text: "",
            income: false,
            income_text: "",
            salary_date: false,
            salary_date_text: "",
            year_service: false,
            year_service_text: "",
            e_name_1: false,
            e_name_1_text: "",
            e_relationship_1: false,
            e_relationship_1_text: "",
            e_mobile_1: false,
            e_mobile_1_text: "",
            e_name_2: false,
            e_name_2_text: "",
            e_relationship_2: false,
            e_relationship_2_text: "",
            e_mobile_2: false,
            e_mobile_2_text: "",
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
			if(this.field.company_name === '') {
				this.validate.company_name = true;
				this.validate.company_name_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.company_name = false;
				this.validate.company_name_text = '';
			}
		
			if(this.field.occupation === '') {
				this.validate.occupation = true;
				this.validate.occupation_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.occupation = false;
				this.validate.occupation_text = '';
			}

            if(this.field.position === '') {
				this.validate.position = true;
				this.validate.position_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.position = false;
				this.validate.position_text = '';
			}

            if(this.field.industry === '') {
				this.validate.industry = true;
				this.validate.industry_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.industry = false;
				this.validate.industry_text = '';
			}

            if(this.field.office_address === '') {
				this.validate.office_address = true;
				this.validate.office_address_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.office_address = false;
				this.validate.office_address_text = '';
			}

            if(this.field.company_contact === '') {
				this.validate.company_contact = true;
				this.validate.company_contact_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.company_contact = false;
				this.validate.company_contact_text = '';
			}

            if(this.field.income === '') {
				this.validate.income = true;
				this.validate.income_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.income = false;
				this.validate.income_text = '';
			}

            if(this.field.salary_date === '') {
				this.validate.salary_date = true;
				this.validate.salary_date_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.salary_date = false;
				this.validate.salary_date_text = '';
			}

            if(this.field.year_service === '') {
				this.validate.year_service = true;
				this.validate.year_service_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.year_service = false;
				this.validate.year_service_text = '';
			}

            if(this.field.e_name_1 === '') {
				this.validate.e_name_1 = true;
				this.validate.e_name_1_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.e_name_1 = false;
				this.validate.e_name_1_text = '';
			}

            if(this.field.e_relationship_1 === '') {
				this.validate.e_relationship_1 = true;
				this.validate.e_relationship_1_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.e_relationship_1 = false;
				this.validate.e_relationship_1_text = '';
			}

            if(this.field.e_mobile_1 === '') {
				this.validate.e_mobile_1 = true;
				this.validate.e_mobile_1_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.e_mobile_1 = false;
				this.validate.e_mobile_1_text = '';
			}

            if(this.field.e_name_2 === '') {
				this.validate.e_name_2 = true;
				this.validate.e_name_2_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.e_name_2 = false;
				this.validate.e_name_2_text = '';
			}

            if(this.field.e_relationship_2 === '') {
				this.validate.e_relationship_2 = true;
				this.validate.e_relationship_2_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.e_relationship_2 = false;
				this.validate.e_relationship_2_text = '';
			}

            if(this.field.e_mobile_2 === '') {
				this.validate.e_mobile_2 = true;
				this.validate.e_mobile_2_text = 'Field cannnot be blank';
				return false
			} else {
				this.validate.e_mobile_2 = false;
				this.validate.e_mobile_2_text = '';
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

    .disclaimer-text {
        font-size: 12px;
        color: grey;
    }
</style>