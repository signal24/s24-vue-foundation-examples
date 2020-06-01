<template>
    <div class="sample">
        <div @contextmenu.prevent="showContextMenu">Right-click me!</div>
    </div>
</template>

<script>
export default {
    methods: {
        showContextMenu(e) {
            this.$contextMenu(e, {
                // optional. 'context-menu-active' class is automatically added.
                targetClass: 'class-added-to-the-span',

                // optional
                class: 'class-added-to-the-menu-itself',

                items: [
                    {
                        title: 'Option 1',
                        class: 'an-extra-class-for-this-option',
                        handler: () => {
                            this.$alert('Option 1', 'You have selected option 1!');
                        }
                    },
                    {
                        title: 'Option 2',
                        handler: () => {
                            this.$alert('Option 2', 'You have selected option 2!');
                        }
                    },
                    {
                        title: 'Option 3 w/ Confirmation',
                        shouldConfirm: true,
                        handler: () => {
                            this.$alert('Option 3', 'You have selected & confirmed option 3!');
                        }
                    }
                ],

                // optional
                onCreate: el => {
                    // this is run after the menu is fully setup
                }
            });
        }
    }
}
</script>

<style lang="scss">
.vf-context-menu {
    border: 1px solid #ccc;
    background: white;

    .item {
        padding: 4px 6px;
        cursor: pointer;

        &:hover {
            background: #ddd;
        }

        &.pending-confirm {
            color: red;
        }
    }
}
</style>