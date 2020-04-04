<template>
    <div class="sample">
        <label><input v-model="isReadOnly" type="checkbox"> Make read-only</label>
        <input type="text" placeholder="type here" v-readonly="isReadOnly">
    </div>
</template>

<script>
export default {
    data() {
        return {
            isReadOnly: true
        }
    }
}
</script>

<style lang="scss" scoped>
label {
    display: block;
}
</style>