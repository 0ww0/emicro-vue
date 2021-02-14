<template>
    <div class="form">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    .form {
		width: 100%;
		max-width: 280px;
		margin: 20px auto;
	}

	.form-control {
		width: 100%;
		margin-bottom: 10px;
        &:last-child {
		    margin-bottom: 0;
	    }

        p {
            margin-bottom: 10px;
        }

		p.pass-info {
			color: #868686;
			font-size: 12px;
			padding: 5px;
			margin-bottom: 0;
		}

		p.title {
			font-weight: 600;
			font-size: 18px;
		}

        input[type="text"],
        input[type="password"],
        input[type="tel"] {
            width: 100%;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid;
            border-color: #adadad;
            outline: none;
            font-size: 14px;
        }

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

    .form-input {
		display: flex;
		flex-flow: row nowrap;
		flex-direction: row;
		
		input {
			width: calc(70% - 5px);
			margin-right: 5px;
		}

		button.verified {
			width: 30%;
			font-size: 8px;
			padding: 4px;
			border-radius: 4px;
            border: 0;
            cursor: pointer;
            text-transform: uppercase;
            outline: none;
            background-color: #018fc3;
            color: #ffffff;
            font-weight: 600;
		}
	}

	.form-error {
        input[type="text"],
        input[type="password"],
        input[type="tel"] {
		    border-color: #ca2e2e;
	    }
        
        p.validate {
            color: #ca2e2e;
		    font-size: 12px;
		    padding: 5px;
        }
    }
</style>