<template>
    <div id="app">
        <HelloWorld />

        <!-- this is necessary to render the root injections (modals) -->
        <component v-for="(injection, index) in rootInjections" :key="index" :is="injection" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    // there are the default store properties exposed by @signal24/vue-foundation
    store: [ 'session', 'globalError', 'rootInjections' ],
    
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
