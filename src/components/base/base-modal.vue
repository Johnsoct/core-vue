<template>
    <div
        class="BaseModal"
        data-cy="base-modal"
    >
        <div
            class="BaseModal__modal"
            data-cy="base-modal-modal"
        >
            <div class="BaseModal__top">
                <div class="BaseModal__text-content">
                    <div
                        v-if="$slots.icon"
                        class="BaseModal__text-content-icon"
                        data-cy="base-modal-text-content-icon"
                    >
                        <slot name="icon" />
                    </div>
                    <label
                        v-if="header && header.length"
                        class="BaseModal__text-content-header"
                        data-cy="base-modal-text-content-header"
                    >
                        {{ header }}
                    </label>
                    <label
                        v-if="subheader && subheader.length"
                        class="BaseModal__text-content-subheader"
                        data-cy="base-modal-text-content-subheader"
                    >
                        {{ subheader }}
                    </label>
                </div>

                <button class="BaseModal__close-icon-btn">
                    <x-close-icon
                        v-if="isClosable"
                        @click="onClose"
                        class="BaseModal__close-icon"
                        data-cy="base-modal-close-icon"
                    />
                </button>
            </div>
            <div
                v-if="$slots.content"
                class="BaseModal__bottom"
                data-cy="base-modal-content"
            >
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  // Components
import XCloseIcon from '@src/components/svg/x-close-icon.vue';

const emits = defineEmits([
    'close-modal',
]);
const props = defineProps({
    header: {
        required: true,
        type: String,
    },
    isClosable: {
        default: true,
        required: false,
        type: Boolean,
    },
    subheader: {
        default: null,
        required: false,
        type: String,
    },
});

const onClose = () => {
    if (props.isClosable) {
        emits("close-modal");
    }
};
</script>

<style lang="sass">
.BaseModal
  +flex($align: center, $justify: center)
  background-color: rgba(0, 0, 0, 0.2)
  height: 100vh
  overflow: auto
  position: static
  width: 100vw
  z-index: 6

  &__bottom
    +flex()
    margin-top: $spacing-8

  &__close-icon
    cursor: pointer
    stroke: $secondary-25-color

  &__close-icon-btn
    +flex($justify: center, $align: center)
    background-color: transparent
    border: 0
    cursor: pointer
    padding: $spacing-2

  &__modal
    background-color: white
    border-radius: $border-radius
    box-shadow: rems(0px) rems(8px) rems(8px) rems(-4px) rgba(16, 24, 40, 0.03), rems(0px) rems(20px) rems(24px) rems(-4px) rgba(16, 24, 40, 0.08)
    margin: auto
    min-width: rems(300px)
    padding: $spacing-6

  &__text-content
    +flex($direction: column)

  &__text-content-header
    +text-lg
    color: $secondary-900-bg
    font-weight: $fw-semi-bold
    margin-top: $spacing-2

  &__text-content-icon
    +flex($align: center, $justify: center)
    border: rems(1px) solid $border
    border-radius: $border-radius
    box-shadow: $box-shadow-inputs
    height: rems(48px)
    margin-bottom: $spacing-2
    width: rems(48px)

    svg
      height: rems(24px)

  &__text-content-subheader
    +text-sm
    color: $secondary-600-bg
    margin-top: $spacing-1

  &__top
    +flex($justify: space-between)
</style>
