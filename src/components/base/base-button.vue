<script setup lang="ts">
  // Packages
  import {
    ref,
    watch,
  } from 'vue';
  // Components
  import BaseBeatLoader from '@src/components/base/base-beat-loader.vue';
  import Ring from '@src/components/svg/ring.vue';

  const emits = defineEmits([
    'click',
  ]);
  const props = defineProps({
    disabled: {
      default: false,
      required: false,
      type: Boolean,
    },
    icon: {
      default: null,
      required: false,
      type: String,
      validator: (value: string) => {
        return [
          'ring',
        ].includes(value);
      },
    },
    loading: {
      default: false,
      required: false,
      type: Boolean,
    },
    size: {
      default: 'md',
      required: false,
      type: String,
      validator: (value: string) => {
        return [
          'lg',
          'md',
          'xl',
        ].includes(value);
      },
    },
    type: {
      default: 'primary',
      required: false,
      type: String,
      validator: (value: string) => {
        return [
          'error',
          'primary',
          'secondary',
          'tertiary',
        ].includes(value);
      },
    },
  });

  const loading = ref(props.loading);

  // eslint-disable-next-line arrow-body-style
  watch(() => props.loading, () => {
    if (props.loading) {
      loading.value = true;
    }
    else {
      loading.value = false;
    }
  });

  const clickHandler = ($event: Event): void => {
    if (props.disabled || props.loading) {
      $event.stopPropagation();
      return;
    }
    else {
      emits('click', $event);
    }
  };
</script>

<template>
  <button
    @click="clickHandler"
    :aria-disabled="disabled"
    :class="`BaseButton BaseButton--${size} BaseButton--${type}`"
    :disabled="disabled"
    data-cy="base-button"
  >
    <ring
      v-if="icon === 'ring'"
      class="BaseButton__icon"
      data-cy="base-button-icon-default"
    />
    <div
      v-if="loading"
      class="BaseButton__loading-bg"
      data-cy="base-button-loader"
    >
      <base-beat-loader class="BaseButton__loader" />
    </div>
    <slot />
  </button>
</template>

<style lang="sass">
.BaseButton
  $block: &
  +flex($align: center, $justify: center)
  border: none
  border-radius: $border-radius
  box-shadow: $box-shadow-inputs
  cursor: pointer
  font-weight: $fw-semi-bold
  line-height: 1
  position: relative
  user-select: none

  &::-moz-focus-inner
    border: 0

  &--error
    +error-600

    #{$block}__icon
      stroke: $error-600-color

    #{$block}__loader
      .BaseBeatLoader__beat
        background-color: $error-600-color

    &[disabled],
    &[aria-disabled="true"]
      background-color: $error-400-bg

    &:hover
      +error-700

    &:focus
      box-shadow: rems(0px) rems(0px) rems(0px) rems(4px) $error-100-bg, rems(0px) rems(1px) rems(2px) rems(0px) rgba(21, 40, 16, 0.05)

  &__icon
    height: rems(17px)
    margin-right: rems(9px)
    width: rems(17px)

  &[disabled],
  &[aria-disabled="true"]
    pointer-events: none

  &--lg
    +text-md
    height: rems(44px)
    line-height: normal
    padding-left: $spacing-4
    padding-right: $spacing-4

  &__loading-bg
    +flex($justify: center, $align: center)
    background-color: inherit
    border-radius: $border-radius
    height: 100%
    left: 0
    position: absolute
    top: 0
    width: 100%
    z-index: 4

  &--md
    +text-sm
    height: rems(38px)
    line-height: normal
    padding-left: $spacing-4
    padding-right: $spacing-4

  &--primary
    +primary-600

    #{$block}__icon
      stroke: $primary-600-color

    #{$block}__loader
      .BaseBeatLoader__beat
        background-color: $primary-600-color

    &[disabled],
    &[aria-disabled="true"]
      background-color: $primary-400-bg

    &:hover
      +primary-700

    &:focus
      box-shadow: rems(0px) rems(0px) rems(0px) rems(4px) rgba(235, 255, 244, 1), rems(0px) rems(1px) rems(2px) rems(0px) rgba(21, 40, 16, 0.05)

  &--secondary
    +primary-50

    #{$block}__icon
      stroke: $primary-50-color

    #{$block}__loader
      .BaseBeatLoader__beat
        background-color: $primary-50-color

    &[disabled],
    &[aria-disabled="true"]
      background-color: $primary-25-bg
      color: $primary-400-bg

      #{$block}__icon
        stroke: $primary-400-bg

    &:hover
      background-color: #CDDEDD

    &:focus
      box-shadow: rems(0px) rems(0px) rems(0px) rems(4px) rgba(240, 255, 254, 1), rems(0px) rems(1px) rems(2px) rems(0px) rgba(19, 40, 16, 0.05)


  &--tertiary
    background-color: $base-white
    border: rems(1px) solid $secondary-300-bg
    color: $secondary-700-bg

    #{$block}__icon
      stroke: $secondary-700-bg

    #{$block}__loader
      .BaseBeatLoader__beat
        background-color: $secondary-700-bg


    &[disabled],
    &[aria-disabled="true"]
      background-color: $base-white
      border-color: $secondary-200-bg
      color: $secondary-300-bg

      #{$block}__icon
        stroke: $secondary-300-bg

    &:hover
      background-color: $secondary-50-bg
      border-color: $secondary-200-bg

    &:focus
      box-shadow: rems(0px) rems(0px) rems(0px) rems(4px) rgba(242, 244, 247, 1), $box-shadow-inputs

  &--xl
    +text-md
    height: rems(48px)
    line-height: normal
    padding-left: $spacing-6
    padding-right: $spacing-6
</style>
