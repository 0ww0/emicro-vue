<template>
    <wrapper class="basic-information">
        <navbar />
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
                        <label :class="[]">
                            <p>Company name</p>
                            <input  type="text" placeholder="Company name">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Type of occupation</p>
                            <input  type="text" placeholder="Type of occupation">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Position</p>
                            <input  type="text" placeholder="Position">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Industry</p>
                            <input  type="text" placeholder="Industry">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Office address</p>
                            <input  type="text" placeholder="Office Address">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Company contact number</p>
                            <input  type="text" placeholder="Company contact number">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Monthly income</p>
                            <input  type="text" placeholder="Monthly income">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Salary date</p>
                            <input  type="text" placeholder="Salary date">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Years of service</p>
                            <input  type="text" placeholder="Years of service">
                            <p  class="validate">  </p>
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
                        <label :class="[]">
                            <p>Name</p>
                            <input  type="text" placeholder="Name">
                            <p  class="validate">  </p>
                        </label>
                    </div>
                    
                    <div class="form-control">
                        <label :class="[]">
                            <p>Relationship</p>
                            <input  type="text" placeholder="Relationship">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Mobile number</p>
                            <input  type="text" placeholder="Mobile number">
                            <p  class="validate">  </p>
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
                        <label :class="[]">
                            <p>Name</p>
                            <input  type="text" placeholder="Name">
                            <p  class="validate">  </p>
                        </label>
                    </div>
                    
                    <div class="form-control">
                        <label :class="[]">
                            <p>Relationship</p>
                            <input  type="text" placeholder="Relationship">
                            <p  class="validate">  </p>
                        </label>
                    </div>

                    <div class="form-control">
                        <label :class="[]">
                            <p>Mobile number</p>
                            <input  type="text" placeholder="Mobile number">
                            <p  class="validate">  </p>
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