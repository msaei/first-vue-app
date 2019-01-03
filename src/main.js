import Vue from 'vue'
import App from './App.vue'
// global filter
Vue.filter('snipet', val => {
    if (!val || typeof(val) != 'string') return ''
    val = val.slice(0, 15)
    return val
})
new Vue({
    el: '#app',
    render: h => h(App)
})