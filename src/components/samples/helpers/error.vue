<template>
    <div class="sample">
        <div><label><input v-model="shouldEnableGlobalHandler" type="checkbox"> Enable global error handler</label></div>
        <div>Message: <input v-model="customErrorMessage" placeholder="Type an error message..."> <button @click="showCustomError()">Show as app error</button> <button @click="showCustomError('USERERR')">Show as user-friendly error</button></div>
        <div><button @click="reportError">Report an error</button></div>
        <div><button @click="handleOnError">Tell error to handle itself</button></div>
    </div>
</template>

<script>
import VueFoundation from '@signal24/vue-foundation'

export default {
    data() {
        return {
            shouldEnableGlobalHandler: false,
            customErrorMessage: ''
        }
    },

    watch: {
        shouldEnableGlobalHandler(value) {
            VueFoundation.configure({
                reportErrorHandler: value ? this.handleGlobalError : null
            });
        }
    },

    methods: {
        showCustomError(errorCode) {
            let err = new Error(this.customErrorMessage || '(no message entered)');
            err.code = errorCode || 'UNKERR';
            
            this.$alert('Error', err);
        },

        reportError() {
            const err = new Error('Randomly generated error message.');
            this.$reportError(err);
        },

        handleOnError() {
            const err = new Error('Randomly generated error message.');
            err.handle();
        },

        handleGlobalError(err) {
            this.$alert('Error', 'Global error handler got the following error:\n\n' + err.message + '\n\nNormally, you\'d configure reportErrorHandler to be a function that reports to a service like Sentry.');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>