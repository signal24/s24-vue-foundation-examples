import Vue from 'vue'
import App from './App.vue'

// importing Vue foundation registers everything it provides
import VueFoundation from '@signal24/vue-foundation'

// configure some variable settings
VueFoundation.configure({

});

// create & mount the app
VueFoundation.mount(App, 'body');