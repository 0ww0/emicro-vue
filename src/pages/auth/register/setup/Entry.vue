<template>
    <wrapper class='register'>
        <navbar url="/auth/login.html"/>
		<flexStart>
			<setup />
		</flexStart>
    </wrapper>
</template>

<script>

import navbar from './../../../../components/navbar/default/Back'
import wrapper from './../../../../components/wrapper/Section'
import flexStart from './../../../../components/wrapper/FlexStart'
import setup from './components/Setup'

export default {
    components: {
        wrapper,
        navbar,
		flexStart,
        setup
    }
}
</script>