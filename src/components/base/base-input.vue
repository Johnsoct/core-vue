<script setup lang="ts">
  // Packages
import {
    ref,
    watch,
} from 'vue';
// Helpers
import {
    cleanUserInput,
} from '@src/utils/formatting/input';
import {
    convertDollarsToBig,
} from '@src/utils/math/big';
// Components
import AlertCircle from '@src/components/svg/alert-circle.vue';
import Eye from '@src/components/svg/eye.vue';
// Types
import type {
    BaseInputCurrencyEmit,
} from '@ts/inputs';

const emits = defineEmits([
    'input',
    'update:modelValue',
]);
const props = defineProps({
    borderless: {
        default: false,
        required: false,
        type: Boolean,
    },
    currency: {
        default: false,
        required: false,
        type: Boolean,
    },
    disabled: {
        default: false,
        required: false,
        type: Boolean,
    },
    hint: {
        default: null,
        required: false,
        type: String,
    },
    instructions: {
        default: null,
        required: false,
        type: String,
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
    maxLength: {
        default: 255,
        required: false,
        type: Number,
    },
    minLength: {
        default: null,
        required: false,
        type: Number,
    },
    // Required if currency is true
    // If currency is true, prop value should be the emitted .cleaned
    modelValue: {
        default: null,
        required: false,
        type: String,
    },
    placeholder: {
        default: null,
        required: false,
        type: String,
    },
    required: {
        default: false,
        required: false,
        type: Boolean,
    },
    type: {
        default: 'text',
        required: false,
        type: String,
    },
    valid: {
        default: true,
        required: false,
        type: Boolean,
    },
});

const localType = ref(props.type);
const localValid = ref(props.valid);

watch(
    [
        () => {
            return props.type;
        },
        () => {
            return props.valid;
        },
    ],
    ([ type, valid ]) => {
        localType.value = type;
        localValid.value = valid;
    }
);

const getCurrencyValueFromCleanInput = (cleanedInput: string): BaseInputCurrencyEmit => {
    if (cleanedInput) {
        // convertDollarsToBig will fail if multiple "." are in the input, but we can't
        // reliably clean "." from the user input
        try {
            return {
                big: convertDollarsToBig(cleanedInput),
                cleaned: cleanedInput,
            };
        }
        catch (error) {
            return '';
        }
    }
    else {
        return '';
    }
};

const getCurrencyValueFromUserInput = (userInput: string): BaseInputCurrencyEmit => {
    if (props.currency) {
        const cleanedInput = cleanUserInput(userInput);
        // Only modify emittedInput if cleanedInput isn't null (i.e. input "ff" would be null)
        // because big will throw an [invalid number] error if a non-number is passed
        return getCurrencyValueFromCleanInput(cleanedInput);
    }
    else {
        return undefined;
    }
};

const emitInput = ($event: Event): void => {
    if (!$event.target) {
        return;
    }

    /*
      * For instances where we're capturing user input representing a financial value
      * (dollars), we want to use a single component (single source of truth) and a
      * single function to clean that user input of all input that we don't want when
      * converting the user input to a big instance
      *
      * If the "currency" prop isn't true, then nothing is different; We're simply emitting
      * the user input.
      *
      * If the "currency" prop is true, we're cleaning the user input and emitting an object
      * with the cleaned user input and the clean input as a big instance.
      */
    const userInput: string = ($event.target as HTMLInputElement).value.trim();
    const userInputCurrencyValue: BaseInputCurrencyEmit = getCurrencyValueFromUserInput(userInput);

    if (userInputCurrencyValue !== undefined) {
        emits('input', userInputCurrencyValue);
        emits('update:modelValue', userInputCurrencyValue);
    }
    else {
        emits('input', userInput);
        emits('update:modelValue', userInput);
    }
};

const setAbandonedRequiredInputInvalid = ($event: Event) => {
    if (props.required) {
        const userInput: string = ($event.target as HTMLInputElement).value.trim();

        if (!userInput.length) {
            localValid.value = false;
        }
    }
};

const toggleInputType = (): void => {
    const originalType = props.type;
    if (originalType !== 'password') {
        return;
    }
    // eslint-disable-next-line no-unused-expressions
    localType.value === 'password'
        ? localType.value = 'text'
        : localType.value = 'password';
};
</script>

<template>
    <div class="BaseInput">
        <label
            v-if="label"
            class="BaseInput__label"
            data-cy="base-input-label"
            :for="labelFor"
        >
            <slot />
        </label>
        <input
            @focusout="setAbandonedRequiredInputInvalid"
            @input="emitInput"
            autocomplete="off"
            :class="['BaseInput__input fs-14', {
                'BaseInput__input--borderless': borderless && localValid,
                'BaseInput__input--error': !localValid,
                'BaseInput__input--hint': hint,
            }]"
            data-cy="base-input-input"
            :disabled="disabled"
            :id="labelFor"
            :maxlength="maxLength"
            :minlength="minLength"
            :placeholder="placeholder"
            :type="localType"
            :value="modelValue"
        >
        <alert-circle
            v-if="!localValid"
            class="BaseInput__error-icon"
            data-cy="base-input-error-icon"
        />
        <eye
            v-if="type === 'password'"
            @click="toggleInputType"
            class="BaseInput__view-icon"
            data-cy="base-input-password-view-icon"
        />
        <transition name="Transition__fade">
            <label
                v-if="!localValid"
                class="BaseInput__error-label"
                data-cy="base-input-instructions"
            >
                {{ instructions }}
            </label>
        </transition>
        <transition name="Transition__fade">
            <label
                v-if="hint"
                class="BaseInput__hint-label"
                data-cy="base-input-hint"
            >
                {{ hint }}
            </label>
        </transition>
    </div>
</template>

<style lang="sass">
.BaseInput
  +flex($direction: column)
  position: relative
  width: rems(250px)

  // Prevent 1Password from displaying their icon on every input
  // :global(com-1password-button)
  //   display: none

  &__error-icon
    height: rems(14px)
    position: absolute
    right: rems(14px)
    stroke: $error-500-bg
    top: rems(37.5px) // Height of label + ((Height of input / 2) - height of icon) + 1/2 of height of icon
    width: rems(14px)

  &__error-label
    +text-sm
    color: $error-500-bg
    margin-top: $spacing-2

  &__hint-label
    +text-sm
    color: $secondary-600-bg
    margin-top: $spacing-2

  &__input
    +text-md
    border: rems(1px) solid $border
    border-radius: $border-radius
    box-shadow: $box-shadow-inputs
    color: $secondary-900-bg
    outline: none
    padding: $spacing-2 $spacing-3
    width: 100%

    &[disabled],
    &[aria-disabled="true"]
      color: $secondary-25-color
      pointer-events: none

    &:focus
      box-shadow: rems(0px) rems(0px) rems(0px) rems(4px) rgba(227, 236, 235, 1), $box-shadow-inputs

    &::placeholder
      color: $secondary-25-color

    &--error
      border-color: $error-300-bg

  &--borderless
    border: none

  &__label
    +text-sm
    color: $secondary-700-bg
    font-weight: $fw-medium
    margin-bottom: $spacing-2
    user-select: none

  &__view-icon
    cursor: pointer
    height: rems(14px)
    position: absolute
    right: rems(14px)
    stroke: $secondary-25-color
    top: rems(37.5px) // Height of label + ((Height of input / 2) - height of icon) + 1/2 of height of icon
    width: rems(14px)
</style>
