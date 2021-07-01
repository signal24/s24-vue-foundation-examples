<template>
    <div class="sample">
        <div> File Size: {{ $filter(120, 'bytes') }} </div>
        <div> File Size: {{ $filter(4562865883, 'bytes') }} </div>
        <div> Dash Nulls: {{ $filter(null, 'dash') }} </div>
        <div> Dash Empty String: {{ $filter('', 'dash') }} </div>
        <div> Dash 0s: {{ $filter(0, 'dashZeros') }} </div>
        <!-- <div> Grammarcase: {{ 'gone to the store' | grammarcase }} </div> --> <!-- grammarcase needs work -->
        <div> Lowercase: {{ $filter('SOME USERS TYPE IN ALL CAPS', 'lowercase') }} </div>
        <div> Number: {{ $filter(123456789, 'number') }} </div>
        <div> Phone: {{ $filter('4045551212', 'phone') }} </div>
        <div> Uppercase First: {{ $filter('here are the samples.', 'ucfirst') }} </div>
        <div> Uppercase Words: {{ $filter('here are the samples.', 'ucwords') }} </div>
        <div> Uppercase: {{ $filter('here are the samples.', 'uppercase') }} </div>
        <div> Unsnake: {{ $filter('in_progress', 'unsnake') }} </div>
        <div> US Currency: {{ $filter(4.26, 'usCurrency') }} </div>
        <div> US Currency: {{ $filter(9, 'usCurrency') }} </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>