<template>
    <div class="sample">
        <div>Time since page loaded: <span v-duration="loadTime" /></div>
        <div>Without seconds: <span v-duration="loadTime" no-seconds /></div>
        <div>30 seconds after Y2K: <span v-duration="30" :base-time="y2k" /></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            y2k: null,
            loadTime: null
        }
    },

    created() {
        this.y2k = new Date(2000, 0, 1, 0, 0, 0).toISOString();
        this.loadTime = new Date().toISOString();
    }
}
</script>

<style lang="scss" scoped>

</style>