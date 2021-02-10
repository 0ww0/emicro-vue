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
                name: 'Legal - setup',
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