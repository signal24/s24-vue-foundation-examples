<template>
    <div class="hello">
        <!-- Components -->
        <h1>Components</h1>

        <h2>Ajax Select</h2>
        <sample-component-ajax-select />

        <h2>Alert</h2>
        <sample-component-alert />

        <h2>Modal</h2>
        <sample-component-modal />

        
        <!-- Directives -->
        <h1>Directives</h1>

        <h2>Autofocus</h2>
        <sample-directive-autofocus />

        <h2>Confirm Button</h2>
        <sample-directive-confirm-button />

        <h2>Date Input</h2>
        <sample-directive-date-input />

        <h2>Date/Time</h2>
        <sample-directive-datetime />

        <h2>Disabled</h2>
        <sample-directive-disabled />

        <h2>Duration</h2>
        <sample-directive-duration />

        <h2>Read Only</h2>
        <sample-directive-readonly />

        <h2>Tooltip</h2>
        <sample-directive-tooltip />

        <h2>User Text</h2>
        <sample-directive-user-text />

        
        <!-- Filters -->
        <h1>Filters</h1>
        <sample-filters />


        <!-- Helpers -->
        <h1>Helpers</h1>
        
        <h2>Array</h2>
        <sample-helper-array />

        <h2>Context Menu</h2>
        <sample-helper-context-menu />

        <h2>Error</h2>
        <sample-helper-error />

        <h2>HTTP</h2>
        <sample-helper-http />
        
        <h2>Mask</h2>
        <sample-helper-mask />

        <h2>Number</h2>
        <sample-helper-number />

        <h2>String</h2>
        <sample-helper-string />


        <!-- Plugins -->
        <h1>Plugins</h1>
        
        <h2>Nested Store</h2>
        <sample-plugin-store />

        <h2>Infinite Scroll</h2>
        <sample-plugin-infinite-scroll />

        <h2>Resize Watcher</h2>
        <sample-plugin-resize-watcher />
    </div>
</template>

<script>
import SampleComponentAjaxSelect from './samples/components/ajax-select';
import SampleComponentAlert from './samples/components/alert';
import SampleComponentModal from './samples/components/modal';
import SampleDirectiveAutofocus from './samples/directives/autofocus';
import SampleDirectiveConfirmButton from './samples/directives/confirm-button';
import SampleDirectiveDateInput from './samples/directives/date-input';
import SampleDirectiveDatetime from './samples/directives/datetime';
import SampleDirectiveDisabled from './samples/directives/disabled';
import SampleDirectiveDuration from './samples/directives/duration';
import SampleDirectiveReadonly from './samples/directives/readonly';
import SampleDirectiveTooltip from './samples/directives/tooltip';
import SampleDirectiveUserText from './samples/directives/user-text';
import SampleFilters from './samples/filters';
import SampleHelperArray from './samples/helpers/array';
import SampleHelperContextMenu from './samples/helpers/context-menu';
import SampleHelperError from './samples/helpers/error';
import SampleHelperHttp from './samples/helpers/http';
import SampleHelperMask from './samples/helpers/mask';
import SampleHelperNumber from './samples/helpers/number';
import SampleHelperString from './samples/helpers/string';
import SamplePluginStore from './samples/plugins/store';
import SamplePluginInfiniteScroll from './samples/plugins/infinite-scroll';
import SamplePluginResizeWatcher from './samples/plugins/resize-watcher';

export default {
    components: {
        SampleComponentAjaxSelect,
        SampleComponentAlert,
        SampleComponentModal,
        SampleDirectiveAutofocus,
        SampleDirectiveConfirmButton,
        SampleDirectiveDateInput,
        SampleDirectiveDatetime,
        SampleDirectiveDisabled,
        SampleDirectiveDuration,
        SampleDirectiveReadonly,
        SampleDirectiveTooltip,
        SampleDirectiveUserText,
        SampleFilters,
        SampleHelperArray,
        SampleHelperContextMenu,
        SampleHelperError,
        SampleHelperHttp,
        SampleHelperMask,
        SampleHelperNumber,
        SampleHelperString,
        SamplePluginStore,
        SamplePluginInfiniteScroll,
        SamplePluginResizeWatcher
    }
}
</script>

<style lang="scss">
h1 {
    font-size: 20px;
    color: #2980b9;
}

h2 {
    font-size: 16px;
    color: #34495e;
}

h1, h2 {
    &:not(:first-child) {
        border-top: 1px dotted #ccc;
        padding-top: 12px;
    }
}

h1 + h2 {
    border-top: inherit !important;
    padding-top: inherit !important;
}

h5 {
    margin-bottom: 0;
}

pre {
    margin: 0;
    padding: 8px;
    background: #ddd;
    overflow: auto;
}
</style>