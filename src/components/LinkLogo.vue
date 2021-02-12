<template>
    <a :href="href" class="link-logo-holder">
        <div class="holder">
            <div class="img-holder">
                <img :src="img" v-if='img'>
            </div>
            <div class="text">
                <p>{{ text }}</p>
            </div>
        </div>
      
        <div class="icon-holder">
            <ph-caret-right :size = "14" />
        </div>
    </a>
</template>

<script>
import { PhCaretRight } from "phosphor-vue"

export default {
    props: {
        href : String,
        text: String,
        img: [Boolean, String],
    },

    components: {
        PhCaretRight
    },

    computed: {
		public_url () {
			return window.location.origin
		},
	}
}
</script>

<style>
    .link-logo-holder {
        display: flex;
        flex-flow: row nowrap;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;

        padding: 15px 10px;
        font-weight: 600;
        font-size: 14px;
    }
</style>