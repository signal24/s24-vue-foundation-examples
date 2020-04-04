<template>
    <div class="sample">
        <div v-if="!windowBottomLastReachedAt">Window has not reached bottom.</div>
        <div v-else>Window last reached bottom at: <span v-datetime="windowBottomLastReachedAt" format="HH:mm:ss.SSSS" /></div>

        <div v-if="!elBottomLastReachedAt">This element has not reached bottom.</div>
        <div v-else>This element last reached bottom at: <span v-datetime="elBottomLastReachedAt" format="HH:mm:ss.SSSS" /></div>

        <p v-if="!randomText">Loading...</p>
        <template v-else>
            <p v-user-text="randomText"></p>
            
            <div v-if="!elBottomLastReachedAt">This element has not reached bottom.</div>
            <div v-else>This element last reached bottom at: <span v-datetime="elBottomLastReachedAt" format="HH:mm:ss.SSSS" /></div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowBottomLastReachedAt: null,
            elBottomLastReachedAt: null,
            randomText: null
        }
    },

    async mounted() {
        let result = await this.$http.get('https://baconipsum.com/api/?type=meat-and-filler');
        this.randomText = result.data.join('\n\n');
    },

    windowScrolledToBottom() {
        this.windowBottomLastReachedAt = new Date();
    },

    elScrolledToBottom(){
        this.elBottomLastReachedAt = new Date();
    }
}
</script>

<style lang="scss" scoped>
.sample {
    max-width: 800px;
    height: 200px;
    overflow: auto;
    padding: 8px;
    background: #ddd;

}
</style>