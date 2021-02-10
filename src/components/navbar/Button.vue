<template>
    <div class="navbar">
        <div class="link-button">
			<a :href="public_url + '/auth/register.html'">Sign Up</a>
        </div>
	</div>
</template>

<script>
export default {
    name: "Navbar",
	computed: {
		public_url () {
			return window.location.origin
		},
	}
}
</script>

<style lang="scss" scoped>
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

			span {
				display: inline-block;
				vertical-align: middle;
			}
	    }
    }

	.link-atag {
		width: 75px;
		a {
			font-weight: 500;
			svg, span {
				display: inline-block;
				vertical-align: middle;
			}
		}
	}
</style>