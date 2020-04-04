<template>
    <div class="sample">
        <p>The HTTP helper catches responses through Axios with a status code >= 400. If there's a JSON payload with an <em>error</em> key,
        it replaces the message of the Error object with the value in the <em>error</em> key. If the status code is 422, it will also
        set the error's <em>code</em> property to <em>USERERR</em>, which is used by the error handlers to determine how to display the
        message to the user, and whether or not to report it.</p>

        <label><input v-model="shouldCatch401" type="checkbox"> Catch HTTP 401 and send to login redirect function</label>

        <button @click="makeCall(200)">Sample 200</button>
        <button @click="makeCall(401)">Sample 401</button>
        <button @click="makeCall(403)">Sample 403</button>
        <button @click="makeCall(500)">Sample 500</button>
    </div>
</template>

<script>
import VueFoundation from '@signal24/vue-foundation'

export default {
    data() {
        return {
            shouldCatch401: true
        };
    },

    watch: {
        shouldCatch401() {
            this.reconfigureVueFoundation();
        }
    },

    created() {
        this.reconfigureVueFoundation();
    },

    methods: {
        reconfigureVueFoundation() {
            VueFoundation.configure({
                unauthorizedHttpResponseHandler: this.shouldCatch401 ? this.handle401 : null
            });
        },

        handle401() {
            this.$alert('401 Caught', 'You would normally configure this to redirect to a login page.');
        },

        async makeCall(code) {
            try {
                await this.$http.get('https://httpstat.us/' + code);
                this.$alert('Success', 'No errors encountered.');
            }

            catch (err) {
                this.$alert('Uh oh!', err);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
p {
    max-width: 800px;
}

label {
    display: block;
    margin: 20px 0;
}
</style>