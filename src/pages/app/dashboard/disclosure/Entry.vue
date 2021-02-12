<template>
    <wrapper class="product-disclosure-sheet">
        <navbar />
        <div class="text-holder">
            <div class="content-title">
				<p>Product Disclosure Sheet</p>
			</div>
            <div class="content-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias reiciendis minima, officiis voluptatibus est aliquid optio non, quaerat ex maiores, accusantium sint modi dolorem vitae nulla quia suscipit deserunt!
            </div>
        </div>
    </wrapper>
</template>

<script>
import wrapper from './../../../../components/wrapper/Section'
import navbar from './../../../../components/navbar/primary/Back'

export default {
    components: {
        wrapper,
        navbar
    }
}
</script>

<style lang="scss" scoped>
	.text-holder {
		width: 100%;
		padding: 20px;
	}

    .content{
		&-title {
			font-size: 18px;
			font-weight: 600;
            padding-bottom: 10px;
		}
        &-text {
            font-size: 14px;
        }
	}
</style>