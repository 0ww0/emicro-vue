<template>
    <div class="flex-holder">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
	.flex-holder {
		display: flex;
		flex-flow: column nowrap;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		width: 100%;
		height: calc(100% - 60px);
	}
</style>