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
                        <label :class="[]">
                            <p>Name</p>
                            <input  type="text" name="name" placeholder="Name">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>NRIC number</p>
                            <input  type="text" name="nric" placeholder="NRIC number">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Date of birth</p>
                            <input  type="text" name="dob" placeholder="Date of Birth">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Gender</p>
                            <input  type="text" name="gender" placeholder="Gender">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Race</p>
                            <input  type="text" name="race" placeholder="Race">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Maritial status</p>
                            <input  type="text" name="maritial" placeholder="Maritial Status">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Education status</p>
                            <input  type="text" name="education" placeholder="Education Status">
                            <p  class="validate">  </p>
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
                        <label :class="[]">
                            <p>Address line 1</p>
                            <input  type="text" name="address" placeholder="Address line 1">
                            <p  class="validate">  </p>
                        </label>
                    </div>
                    
                    <div class="form-control">
                        <label :class="[]">
                            <p>Address line 2</p>
                            <input  type="text" name="address" placeholder="Address line 2">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Postcode</p>
                            <input  type="text" name="postcode" placeholder="Postcode">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>State</p>
                            <input  type="text" name="state" placeholder="State">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>City</p>
                            <input  type="text" name="city" placeholder="City">
                            <p  class="validate">  </p>
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
                        <label :class="[]">
                            <p>Email Address</p>
                            <input  type="text" name="email" placeholder="Email Address">
                            <p  class="validate">  </p>
                        </label>
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