<template>
    <wrapper class='register'>
        <navbar />
		<flexCenter>
            <register />
		</flexCenter>
    </wrapper>
</template>

<script>

import navbar from './../../../../components/navbar/default/Back'
import wrapper from './../../../../components/wrapper/Section'
import flexCenter from './../../../../components/wrapper/FlexCenter'
import register from './components/Register'

export default {
    components: {
        wrapper,
        navbar,
		flexCenter,
        register
    }
}
</script>