<template>
    <div class="sample">
        <!-- note for later: statically setting the params object inline here fires the "params" watcher in the component, even though the "new" and "old" values are identical in content -->
        <ajax-select v-model="selectedRepo" url="https://api.github.com/search/repositories" :params="params" :preprocessor="processItems" items-key="items" text-key="name" null-text="Select a repository..." />

        <h5>Selection:</h5>
        <pre>{{ JSON.stringify(selectedRepo) }}</pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedRepo: null
        }
    },

    computed: {
        params() {
            return { q: 'vuejs' };
        }
    },

    methods: {
        processItems(items) {
            items.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
}
</script>

<style lang="scss" scoped>

</style>