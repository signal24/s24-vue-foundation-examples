<template>
    <div class="sample">
        <div>Numbers: {{ numbers.join(', ') }}</div>
        <div>First Number: {{ numbers.first() }}</div>
        <div>Last Number: {{ numbers.last() }}</div>
        <button @click="replace8">Replace 8</button>
        <button @click="remove15">Remove 15</button>
        <button @click="remove42">Remove 42</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numbers: [ 4, 8, 15, 16, 23, 42 ]
        }
    },

    methods: {
        replace8() {
            this.numbers.replace(8, 9);
        },

        remove15() {
            this.numbers.remove(15);
        },

        remove42() {
            this.numbers.remove(42);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>