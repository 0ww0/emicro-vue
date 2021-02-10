import Vue from 'vue'
import './../../../assets/style/global'
import { store } from './stores/store.js';
import Entry from './Entry'

new Vue({
    el: '#app',
    store,
    render : h => h(Entry)
})