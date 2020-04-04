<template>
    <div class="sample">
        <button @click="showAlert">Show alert</button>
        <button @click="showConfirm">Show confirm</button>
        <button @click="showWait()">Show wait</button>
        <button @click="showWait('Reticulating splines...')">Show wait w/ custom message</button>
        <div v-if="wasConfirmed !== null">Confirmed: {{ wasConfirmed ? 'yes' : 'no' }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wasConfirmed: null
        }
    },

    methods: {
        showAlert() {
            this.$alert('Title', 'Alert text.');
        },

        async showConfirm() {
            this.wasConfirmed = await this.$confirm('Title', 'Are you sure of this?');
        },
        
        async showWait(msg) {
            this.$wait(msg);

            setTimeout(() => {
                this.$endWait();
            }, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>