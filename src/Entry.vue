<template>
   <ul>
       <li v-for = 'i in url' :key='i.id'>
            <span>{{ i.id }}.</span>
            <a :href="public_url + i.path + '.html'">{{ i.name }}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        url: [
            {
                id: 1,
                name: 'home',
                path: '/index',
            },

            {
                id: 2,
                name: 'login',
                path: '/auth/login'
            },

            {
                id: 3,
                name: 'forgot',
                path: '/auth/forgot'
            },

            {
                id: 4,
                name: 'Legal - policy',
                path: '/legal/policy'
            },

            {
                id: 5,
                name: 'Legal - service',
                path: '/legal/service'
            },

            {
                id: 6,
                name: 'register - index',
                path: '/auth/register/index'
            },

            {
                id: 7,
                name: 'register - setup',
                path: '/auth/register/setup'
            },

            {
                id: 8,
                name: 'app - account - index',
                path: '/app/account/index'
            },

            {
                id: 9,
                name: 'app - howto - index',
                path: '/app/howto/index'
            },

            {
                id: 10,
                name: 'app - dashboard - index',
                path: '/app/dashboard/index'
            },

            {
                id: 11,
                name: 'app - loan - index',
                path: '/app/loan/index'
            },
        ]
    }),
    computed: {
        public_url() {
            return window.location.origin
        }
    },

    method: {

    }
}
</script>

<style>
    ul {
        font-size: 20px;
    }
</style>