<template>
    <div class="sample">
        <label><input v-model="shouldCloseOnMaskClick" type="checkbox"> Close on mask click</label>
        <label><input v-model="shouldShowCloseX" type="checkbox"> Show close X</label>
        <button @click="showModal">Show modal</button>
        <span v-if="wasModalShown">Result: {{ modalResult || '(cancelled)' }}</span>
    </div>
</template>

<script>
import SampleModal from './modal/sample-modal';

export default {
    data() {
        return {
            shouldCloseOnMaskClick: true,
            shouldShowCloseX: true,
            wasModalShown: false,
            modalResult: null
        }
    },

    methods: {
        async showModal() {
            const fruit = 'apple';

            let result = await this.$modal(SampleModal, {
                fruit,
                shouldCloseOnMaskClick: this.shouldCloseOnMaskClick,
                shouldShowCloseX: this.shouldShowCloseX
            });

            this.wasModalShown = true;
            this.modalResult = result;
        }
    }
}
</script>

<style lang="scss" scoped>
label {
    display: block;
}
</style>