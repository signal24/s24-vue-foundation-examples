<template>
    <div class="sample">
        <span v-tip="tipText">Sample 1</span>
        <span v-tip="'Tip is an awkward JS string in an attribute'">Sample 2</span>
        <span v-tip tip="Tip is a normal HTML attribute, but the word 'tip' is duplicated.">Sample 3</span>
        <span v-tip.html="'This tip has <u>HTML</u>!'">Sample 4</span>
        <span v-tip="'This tip has extra classes.'" tip-class="extra-tip-class">Sample 5</span>

        <!-- title and static need implementation work -->
        <!-- <span v-tip="'This tip has a title.'" title="Tip Title">Sample 6</span> -->
        <!-- <span v-tip="'This tip has is static.'" static>Sample 7</span> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            tipText: 'Dynamic tip text from the instance.'
        }
    }
}
</script>

<style lang="scss" scoped>
span {
    text-decoration: underline;
    text-decoration-style: dotted;
    margin-right: 10px;
}
</style>