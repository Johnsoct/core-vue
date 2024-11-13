<script setup lang="ts">
  // Packages
  import vSelect from 'vue-select';
  import {
    defineEmits,
    defineProps,
    ref,
    watch,
  } from "vue";
  // Components
  import ChevronDown from '@src/components/svg/chevron-down.vue';
  import XClose from '@src/components/svg/x-close.vue';
  // Styles
  import "vue-select/dist/vue-select.css";

  const emit = defineEmits([
    'update:modelValue',
  ]);
  const props = defineProps({
    clearable: {
      default: true,
      required: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      required: false,
      type: Boolean,
    },
    label: {
      default: false,
      required: false,
      type: Boolean,
    },
    labelFor: {
      default: null,
      required: false,
      type: String,
    },
    options: {
      required: true,
      type: Array,
    },
    placeholder: {
      default: "Select an option",
      required: false,
      type: String,
    },
    searchable: {
      default: false,
      required: false,
      type: Boolean,
    },
    value: {
      default: null,
      required: false,
      type: Object,
    },
  });

  const selectedOption = ref(props.value);

  // eslint-disable-next-line arrow-body-style
  watch(() => selectedOption.value, () => {
    emit("update:modelValue", selectedOption.value);
  });
</script>

<!-- Only render the component when the options as props is a valid array of options -->
<template>
  <div
    class="BaseSelect"
    data-cy="base-select"
  >
    <label
      v-if="label"
      class="BaseSelect__label"
      data-cy="base-select-label"
      :for="labelFor"
    >
      <slot />
    </label>
    <v-select
      v-model="selectedOption"
      :class="['BaseSelect__select', {
        'BaseSelect__select--disabled': disabled,
      }]"
      :clearable="clearable"
      :components="{
        Deselect: XClose,
      }"
      data-cy="base-select-select"
      :disabled="disabled"
      :id="labelFor"
      :options="options"
      :placeholder="placeholder"
      :searchable="searchable"
    >
      <template #open-indicator>
        <chevron-down
          class="BaseSelect__open-indicator-icon"
          data-cy="base-select-open-indicator-icon"
        />
      </template>

      <template #option="slotProps">
        <slot
          name="option"
          v-bind="(slotProps as Record<string, unknown>)"
        />
      </template>
      <template #selected-option="slotProps">
        <slot
          name="selected-option"
          v-bind="(slotProps as Record<string, unknown>)"
        />
      </template>
    </v-select>
  </div>
</template>

<style lang="sass">
.BaseSelect
  $block: &
  +flex($direction: column)

  .vs__actions
    padding: 0

  .vs__clear
    +flex($justify: center, $align: center)

  .vs__clear svg,
  &__open-indicator-icon
    height: rems(20px)
    stroke: $secondary-500-bg
    width: rems(20px)

  .vs__dropdown-menu
    border: rems(1px) solid $secondary-200-bg
    border-radius: $border-radius
    box-shadow: rems(0px) rems(4px) rems(6px) rems(-2px) rgba(16, 24, 40, 0.03), rems(0px) rems(12px) rems(16px) rems(-4px) rgba(16, 24, 40, 0.08)
    // Horizontally center by half parent's border width
    left: rems(-1px)
    padding: $spacing-2 $spacing-3
    top: calc(100% + $spacing-1)
    // Add width to account for border of parent
    width: calc(100% + 2px)

  .vs__dropdown-option,
  .vs__no-options
    +text-md
    color: $secondary-900-bg
    font-weight: $fw-bold
    padding: $spacing-3

  .vs__dropdown-option
    border-radius: $border-radius
    &:active,
    &:hover,
    &:focus,
    &:visited
      background-color: $secondary-100-bg

  .vs__dropdown-option--highlight
    background: none
    color: none

  .vs__dropdown-toggle
    +flex($align: center, $justify: space-between)
    border: 0
    padding: 0

  .vs__search,
  .vs__selected
    +text-md
    border: 0
    color: $secondary-900-bg
    font-weight: $fw-medium
    line-height: 0
    margin: 0
    padding: 0

  .vs__selected-options
    padding-left: 0

  .v-select
    background-color: $base-white
    border: rems(1px) solid $border
    border-radius: $border-radius
    box-shadow: $box-shadow-inputs
    padding: $spacing-2 $spacing-3
    width: rems(250px)

  .vs--single.vs--open
    .vs__selected
      position: unset
      opacity: 1

  &__label
    +text-sm
    color: $secondary-700-bg
    font-weight: $fw-medium
    margin-bottom: $spacing-2
    user-select: none

  &__select

    &--disabled
      pointer-events: none

      .vs__search
        color: $secondary-25-color

</style>
