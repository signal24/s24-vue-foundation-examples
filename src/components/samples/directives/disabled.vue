<template>
    <div class="sample">
        <div>
            <label><input v-model="isDisabled" type="checkbox"> Disable everything</label>
        </div>

        <div class="controls">
            <div><input type="text" placeholder="text here" v-disabled="isDisabled"></div>
            <div><input type="checkbox" v-disabled="isDisabled"> A checkbox</div>
            <div><label v-disabled="isDisabled"><input type="checkbox"> A checkbox with a label</label></div>
            <div><select v-disabled="isDisabled"><option selected>Some options...</option></select></div>
            <div><button v-disabled="isDisabled" @click.prevent>Click me!</button></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDisabled: true
        }
    }
}
</script>

<style lang="scss" scoped>
.controls {
    margin-top: 10px;
    display: inline-block;
    padding: 10px;
    background: #eee;
}
</style>