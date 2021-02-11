<template>
    <div class="botbar">
        <a :href="public_url + '/app/dashboard/index.html'" class="navi-holder">
            <span >Dashboard</span>
        </a>
        <a :href="public_url + '/app/howto/index.html'" class="navi-holder">
            <p>How It Work</p>
        </a>
        <a :href="public_url + '/app/loan/index.html'" class="navi-holder">
            <p>My Loan</p>
        </a>
        <a :href="public_url + '/app/account/index.html'" class="navi-holder">
            <p>My Account</p>
        </a>
    </div>
</template>

<script>
export default {
    computed: {
        public_url() {
            return window.location.origin
        }
    }
}
</script>

<style lang="scss" scoped>
	.botbar {
		width: 100%;
		height: 80px;
		display: flex;
		flex-flow: row nowrap;
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
		padding: 8px;
        background-color: #ffffff;
	}

    .navi-holder {
        width: 100px;
        border-radius: 4px;
        display: flex;
		flex-flow: row nowrap;
		flex-direction: row;
		justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 12px;

        &:hover, &.active {
            color: #018fc3;
            background-color: #018fc33d;
        }

        a{
            width: 100%;
        }
    }
</style>