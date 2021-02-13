<template>
    <wrapper class="basic-information">
        <navbar />
        <flexStart>
            <div class="navigation">
                <div class="navi-group">
                    <p class="dot"></p>
                    <p class="dot"></p>
                    <p class="dot active"></p>
                    <p class="text">Identity Authenticate</p>
                    <p class="dot"></p>
                </div>
            </div>
            <div class="form-holder">
                <formW>
                    <div class="form-control">
                        <p class="title">Upload The Following Photo For Verification</p>
                    </div>
                    <div class="form-control">
                        <p>NRIC front photo*</p>
                        <div class="form-input">
                            <div class="form-file">
                                <input type="file" id="file" />
                                <label for="file">Upload</label>
                            </div>
                            <div class="example-image">
                                <div class="background"></div>
                                <p>Example</p>
                            </div>
                        </div>
                        <div class="form-text">
                            <p>Please refer to the example photo, photo must be clearly visible. If upload irrelevent image, system will reject the application</p>
                        </div>
                    </div>

                    <div class="form-control">
                        <br>
                        <hr>
                        <br>
                    </div>

                    <div class="form-control">
                        <p>NRIC back photo*</p>
                        <div class="form-input">
                            <div class="form-file">
                                <input type="file" id="file" />
                                <label for="file">Upload</label>
                            </div>
                            <div class="example-image">
                                <div class="background"></div>
                                <p>Example</p>
                            </div>
                        </div>
                        <div class="form-text">
                            <p>Please refer to the example photo, photo must be clearly visible. If upload irrelevent image, system will reject the application</p>
                        </div>
                    </div>

                    <div class="form-control">
                        <br>
                        <hr>
                        <br>
                    </div>

                    <div class="form-control">
                        <p>Identity Confirmation*</p>
                        <div class="form-input">
                            <div class="form-file">
                                <input type="file" id="file" />
                                <label for="file">Upload</label>
                            </div>
                            <div class="example-image">
                                <div class="background"></div>
                                <p>Example</p>
                            </div>
                        </div>
                        <div class="form-text">
                            <p>Please refer to the example photo, photo must be clearly visible. If upload irrelevent image, system will reject the application</p>
                        </div>
                    </div>

                    <div class="form-control">
                        <br>
                    </div>

                    <div class="form-control">
                        <p class="disclaimer-text">*Emicro will direct reject the application if falsification of emergency information.</p>
                    </div>

                    <div class="form-control">
                        <br>
                    </div>

                    <div class="form-control">
                        <p class="act-text">
                            Under the National Registration Act 1959 (Act 78) and the National Registration Regulation 1990, the misuse or identity cards is a criminal offence. Emicro will report the case to the police and
                        </p>
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

    .form-input {
        display: flex;
        flex-flow: row nowrap;
        flex-direction: row;
    }

    .form-file {
        position: relative;
        width: 50%;

        input[type="file"] {
            opacity: 0;
            width: 0.1px;
            height: 0.1px;
            position: absolute;
        }

        label {
            position: relative;
            width: 100%;
            height: 140px;
            border-radius: 4px;
            background-color: #ffffff;
            border: 3px dashed grey;
            display: flex;
            align-items: center;
            justify-content: center;
            color: grey;
            font-weight: bold;
            opacity: 0.5;
        }
    }

    .example-image {
        display: flex;
        flex-flow: column nowrap;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        width: 50%;
        text-align: center;

        .background {
            background-color: aqua;
            width: calc(100% - 10px);
            height: 80px;
            margin-left: 10px;
        }

        p {
            padding: 5px;
            font-size: 12px;
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

    .form-text {
        font-size: 12px;
        padding-top: 10px;
    }

    .act-text {
        font-size: 12px;
        color: red;
    }

    .disclaimer-text {
        font-size: 12px;
        color: grey;
    }
</style>