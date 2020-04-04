<template>
    <div class="sample">
        <template v-if="!lastResizedAt">Window has not been resized.</template>
        <template v-else>Window last resized at: <span v-datetime="lastResizedAt" format="HH:mm:ss.SSSS" /></template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lastResizedAt: null
        }
    },

    windowResized() {
        this.lastResizedAt = new Date();
    }
}
</script>

<style lang="scss" scoped>

</style>