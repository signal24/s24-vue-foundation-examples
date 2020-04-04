<template>
    <div class="sample">
        <input v-model="aDate" type="text" v-date-input>
        <div>Value: {{ aDate || '(none)' }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aDate: null
        }
    }
}
</script>

<style lang="scss" scoped>

</style>