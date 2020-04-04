import Vue from 'vue'
import App from './App.vue'

// importing Vue foundation registers everything it provides
import VueFoundation from '@signal24/vue-foundation'

// configure some variable settings
VueFoundation.configure({
    
});

// get the default store, which provides a session state, root injections, and a global error, if needed
const store = VueFoundation.getStore();

// create the root Vue instance
const root = new Vue({
    render: function (h) { return h(App) },
    data: { store }
}).$mount('#app')

// let VueFoundation know the root instance
VueFoundation.setRoot(root);