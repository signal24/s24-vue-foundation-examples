<template>
    <modal id="sample-modal" :close-on-mask-click="shouldCloseOnMaskClick" :close-x="shouldShowCloseX">
        <h1 slot="header">Title</h1>

        <p>I have a {{ fruit }}. Can you name another food?</p>
        <input v-model="anotherFood" type="text" v-autofocus>

        <footer slot="footer">
            <button @click="submit">Submit</button>
            <button type="button" @click="cancel">Cancel</button>
        </footer>
    </modal>
</template>

<script>
export default {
    data() {
        return {
            // these will be overridden by the invocation by the caller.
            // note that if the caller passes an object, it's deep cloned.
            fruit: null,
            shouldCloseOnMaskClick: null,
            shouldShowCloseX: null,

            anotherFood: null
        }
    },

    methods: {
        submit() {
            if (!this.anotherFood)
                return this.$alert('Food', 'Please enter another food!');

            this.$dismiss(this.anotherFood);
        },

        cancel() {
            // this just dismisses with an "undefined" result
            this.$dismiss();
        }
    }
}
</script>