<template>
    <div class="sample">
        <button v-confirm-button @confirm="setConfirmed">Click me</button>

        <span v-if="confirmationTime">Confirmed at {{ confirmationTime }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmationTime: null
        }
    },

    methods: {
        setConfirmed() {
            this.confirmationTime = new Date().toISOString();
        }
    }
}
</script>

<style lang="scss" scoped>

</style>