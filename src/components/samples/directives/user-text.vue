<template>
    <div class="sample">
        <div v-user-text="crazyString" />
    </div>
</template>

<script>
const CRAZY_STRING = `This is an example of user provided input.

It might contain line breaks, <html> tags - maybe someone even tried to throw in <script>!

But we've got it handled.`;

export default {
    data() {
        return {
            crazyString: CRAZY_STRING
        }
    }
}
</script>

<style lang="scss" scoped>

</style>