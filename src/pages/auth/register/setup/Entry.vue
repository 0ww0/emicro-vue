<template>
    <wrapper class='register'>
        <navbar />
		<flexCenter>
			<setup />
		</flexCenter>
    </wrapper>
</template>

<script>

import navbar from './../../../../components/navbar/default/Back'
import wrapper from './../../../../components/wrapper/Section'
import flexCenter from './../../../../components/wrapper/FlexCenter'
import setup from './components/Setup'

export default {
    components: {
        wrapper,
        navbar,
		flexCenter,
        setup
    }
}
</script>