<template>
    <div
        @click="onChange"
        :class="['BaseRadioInput', {
            'BaseRadioInput--disabled': disabled,
        }]"
        data-cy="base-radio-input"
    >
        <input
            v-model="radioInputValue"
            :class="[ 'BaseRadioInput__input', {
                'BaseRadioInput__input--checked': radioInputValue === true,
            }]"
            data-cy="base-radio-input-input"
            :disabled="disabled"
            :id="radioID"
            type="radio"
            :value="value"
        >
        <div class="BaseRadioInput__labels">
            <label
                v-if="label"
                class="BaseRadioInput__label"
                data-cy="base-radio-input-label"
                :for="labelFor"
            >
                <slot />
            </label>

            <label
                v-if="supportingLabel"
                class="BaseRadioInput__supporting-label"
                data-cy="base-radio-input-supporting-label"
                :for="supportingLabelFor"
            >
                <slot name="supporting" />
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
// Packages
import { ref } from 'vue';

const emit = defineEmits([ "update:modelValue" ]);
const props = defineProps({
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
        default: '',
        required: false,
        type: String,
    },
    supportingLabel: {
        default: false,
        required: false,
        type: Boolean,
    },
    supportingLabelFor: {
        default: '',
        required: false,
        type: String,
    },
    value: {
        default: false,
        required: false,
        type: Boolean,
    },
});

const radioID = `${props.labelFor} ${props.supportingLabelFor}`.trim();
const radioInputValue = ref(props.value);

const onChange = () => {
    if (!props.disabled) {
        radioInputValue.value = !radioInputValue.value;
        emit("update:modelValue", radioInputValue.value);
    }
};
</script>

<style lang="scss">
@use "../../styles/base/colors" as *;
@use "../../styles/base/functions" as *;
@use "../../styles/base/mixins" as *;
@use "../../styles/base/typography" as *;
@use "../../styles/base/spacing/box" as *;

.BaseRadioInput {
    $block: &;
    @include flex($align: center);
    cursor: pointer;
    height: rems(38px) // Match other input heights / make hit area larger;

    &--disabled
    {
        cursor: none;
        pointer-events: none;
    }
    &__input {
        appearance: none;
        border: rems(1px) solid $border;
        border-radius: 50%;
        cursor: inherit;
        height: rems(20px);
        transition: 0.2s all linear;
        width: rems(20px);

        &:hover,
        &:focus {
            background-color: $primary-600-bg;
            border-color: $base-white;
            border-width: rems(6px);
            box-shadow: rems(0px) rems(0px) rems(0px) rems(1px) $primary-600-bg;
        }
        &[disabled],
        &[aria-disabled="true"] {
            background-color: $secondary-300-bg;
            border-color: $secondary-100-bg;
            box-shadow: rems(0px) rems(0px) rems(0px) rems(1px) $secondary-300-bg;
        }
        &--checked {
            background-color: $primary-600-bg;
            border-color: $base-white;
            border-width: rems(6px);
            box-shadow: rems(0px) rems(0px) rems(0px) rems(1px) $primary-600-bg;
        }
    }
    &__label {
        @include text-md;
        color: $secondary-900-bg;
        cursor: inherit;
        font-weight: $fw-medium;
        user-select: none;
    }
    &__labels {
        @include flex($direction: column);
        margin-left: $spacing-3;
    }
    &__supporting-label {
        @include text-sm;
        color: $secondary-600-bg;
        cursor: inherit;
        font-weight: $fw-medium;
    }
}
</style>
