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
                name: 'auth - login',
                path: '/auth/login'
            },

            {
                id: 3,
                name: 'auth - forgot',
                path: '/auth/forgot'
            },

            {
                id: 4,
                name: 'auth - register - index',
                path: '/auth/register/index'
            },

            {
                id: 5,
                name: 'auth - register - setup',
                path: '/auth/register/setup'
            },

            {
                id: 6,
                name: 'legal - policy',
                path: '/legal/policy'
            },

            {
                id: 7,
                name: 'legal - service',
                path: '/legal/service'
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
                name: 'app - dashboard - disclosure',
                path: '/app/dashboard/disclosure'
            },

            {
                id: 12,
                name: 'app - dashboard - apply - index',
                path: '/app/dashboard/apply/index'
            },

            {
                id: 13,
                name: 'app - dashboard - apply - form - basic',
                path: '/app/dashboard/apply/form/basic'
            },

            {
                id: 14,
                name: 'app - dashboard - apply - form - social',
                path: '/app/dashboard/apply/form/social'
            },

            {
                id: 15,
                name: 'app - dashboard - apply - form - identity',
                path: '/app/dashboard/apply/form/identity'
            },

            {
                id: 16,
                name: 'app - dashboard - apply - form - other',
                path: '/app/dashboard/apply/form/other'
            },

            {
                id: 17,
                name: 'app - loan - index',
                path: '/app/loan/index'
            },

            {
                id: 18,
                name: 'app - loan - notice',
                path: '/app/loan/notice'
            },

            {
                id: 19,
                name: 'app - loan - agreement',
                path: '/app/loan/agreement'
            },

            {
                id: 20,
                name: 'app - loan - signature',
                path: '/app/loan/signature'
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