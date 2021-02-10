<template>
    <div class="navbar">
        <div class="link-button">
            <a href="#">Sign Up</a>
        </div>
	</div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
    @import "./../../../../assets/style/config";

	.navbar {
		width: 100%;
		height: 60px;
		display: flex;
		flex-flow: row nowrap;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding: 10px 20px;
	}

	.link-button {
        a {
		    background-color: #ffffff;
		    color: #018fc3;
		    border: 1px solid;
		    border-color: #018fc3;
		    border-radius: 4px;
		    padding: 8px 20px;
            &:hover {
                background-color: #018fc3;
		        color: #ffffff;
            }
	    }
    }
</style>