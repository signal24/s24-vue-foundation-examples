<template>
    <div class="sample">
        <div> File Size: {{ 120 | bytes }} </div>
        <div> File Size: {{ 4562865883 | bytes }} </div>
        <div> Dash Nulls: {{ null | dash }} </div>
        <div> Dash Empty String: {{ '' | dash }} </div>
        <div> Dash 0s: {{ 0 | dash-zeros }} </div>
        <!-- <div> Grammarcase: {{ 'gone to the store' | grammarcase }} </div> --> <!-- grammarcase needs work -->
        <div> Lowercase: {{ 'SOME USERS TYPE IN ALL CAPS' | lowercase }} </div>
        <div> Number: {{ 123456789 | number }} </div>
        <div> Phone: {{ '4045551212' | phone }} </div>
        <div> Uppercase First: {{ 'here are the samples.' | ucfirst }} </div>
        <div> Uppercase Words: {{ 'here are the samples.' | ucwords }} </div>
        <div> Uppercase: {{ 'here are the samples.' | uppercase }} </div>
        <div> Unsnake: {{ 'in_progress' | unsnake }} </div>
        <div> US Currency: ${{ 4.26 | us-currency }} </div>
        <div> US Currency: ${{ 9 | us-currency }} </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>