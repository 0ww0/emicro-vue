<template>
    <wrapper class='register'>
        <navbar url="/auth/login.html"/>
		<flexStart>
            <register />
		</flexStart>
    </wrapper>
</template>

<script>

import navbar from './../../../../components/navbar/default/Back'
import wrapper from './../../../../components/wrapper/Section'
import flexStart from './../../../../components/wrapper/FlexStart'
import register from './components/Register'

export default {
    components: {
        wrapper,
        navbar,
		flexStart,
        register
    }
}
</script>