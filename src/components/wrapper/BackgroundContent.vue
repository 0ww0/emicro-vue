<template>
    <div>
        <div class="content-background">
	    </div>
		<div class="content-foreground">
            <slot />
		</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .content-background {
		width: 100%;
		background-color: #018fc3;
		height: 60px;
	}
	
	.content-foreground {
		width: 90%;
		margin: 0 auto;
		background-color: #ffffff;
		padding: 15px 20px;
		margin-top: -60px;
		border-radius: 4px;
	}
</style>