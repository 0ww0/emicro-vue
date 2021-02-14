import Vue from 'vue'
import VueSignaturePad from 'vue-signature-pad';
import './../../../../assets/style/global'
import Entry from './Entry'
Vue.use(VueSignaturePad);
new Vue({
    el: '#app',
    render : h => h(Entry)
})