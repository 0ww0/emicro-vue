<template>
    <wrapper class="basic-information">
        <navbar />
        <flexStart>
            <div class="signature-pad">
                <VueSignaturePad width="100%" height="100%" ref="signaturePad" />
                <div class="undo-pad">
                    <button class="undo" @click="undo">
                        <ph-arrows-counter-clockwise :size="38" />
                    </button>
                </div>
            </div>
            <div class="text-holder">
                <p>By Signing this document with electric signature, I agree that such signature will be as valid as handwritten signatures to the extend allowed by local  law.</p>
            </div>
            <div class="form-button">
                <button class="submit" @click="save">
                    Confirm
                </button>
            </div>
        </flexStart>
    </wrapper>
</template>

<script>
import wrapper from './../../../../components/wrapper/Section'
import navbar from './../../../../components/navbar/primary/Back'
import flexStart from './../../../../components/wrapper/FlexStart'
import { PhArrowsCounterClockwise } from "phosphor-vue"

export default {
    components : {
        wrapper,
        navbar,
        flexStart,
        PhArrowsCounterClockwise
    },

    methods: {
        undo() {
            this.$refs.signaturePad.undoSignature();
        },

        save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            console.log(isEmpty);
            console.log(data);
        }
    }
}
</script>

<style lang="scss" scoped>
    .signature-pad {
        position: relative;
        width: 100%;
        max-width: 280px;
        margin: 20px auto;
        height: 320px;
        background-color: white;

        .undo-pad {
            position: absolute;
            top: 0;
            right: 0;
            margin: 10px;

            button.undo{
                width: 100%;
                border-radius: 4px;
                border: 0;
                padding: 4px;
                outline: none;
                cursor: pointer;
            }
        }
    }

    .text-holder {
		width: 100%;
		padding: 20px;
        padding-top: 0;
	}

    .form-button {
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
        margin-bottom: 20px;
        
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