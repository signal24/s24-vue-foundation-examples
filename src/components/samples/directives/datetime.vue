<template>
    <div class="sample">
        <div><input v-model="dateValue" type="text"></div>
        <div>Default Format (local): <span v-datetime="interpretedDate" /></div>
        <div>Default Format (UTC): <span v-datetime="interpretedDate" display-utc /></div>
        <div>Custom Format: <span v-datetime="interpretedDate" format="DD-MM-YYYY hh:mm:ss a" /></div>
        <div>Local Source: <span v-datetime="interpretedDate" local /></div>
        <div>Placeholder: <span v-datetime="interpretedDate" placeholder="Never happened" /></div>
        
        <!-- this one needs work: -->
        <!-- <div>Relative: <span v-datetime="interpretedDate" :relative-date="renderTime" /></div> -->
    </div>
</template>

<script>
import moment from 'moment';

export default {
    data() {
        return {
            renderTime: null,
            dateValue: null
        }
    },

    computed: {
        interpretedDate() {
            return this.dateValue ? moment(this.dateValue) : this.dateValue;
        }
    },

    created() {
        this.renderTime = new Date().toISOString();
        this.dateValue = this.renderTime;
    }
}
</script>

<style lang="scss" scoped>
input {
    width: 200px;
}
</style>