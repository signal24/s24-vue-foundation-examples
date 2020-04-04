<template>
    <div class="sample">
        <label>
            <input v-model="shouldRenderField" type="checkbox"> Render auto-focusing input field
        </label>

        <input v-if="shouldRenderField" type="text" placeholder="Type something..." v-autofocus>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shouldRenderField: false
        }
    }
}
</script>

<style lang="scss" scoped>
label {
    display: block;
}
</style>