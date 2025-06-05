<template>
    <div
        :class="`BaseBanner BaseBanner--${type}`"
        :data-cy="`base-banner-${props.type}`"
    >
        <div class="BaseBanner__left">
            <div class="BaseBanner__icon-container">
                <alert-triangle-icon
                    v-if="type === 'error'"
                    class="BaseBanner__icon"
                    data-cy="base-banner-icon-alert-triangle"
                />
                <check-circle-icon
                    v-if="type === 'info'"
                    class="BaseBanner__icon"
                    data-cy="base-banner-icon-check-circle"
                />
                <message-icon
                    v-if="type === 'persistent'"
                    class="BaseBanner__icon"
                    data-cy="base-banner-icon-message"
                />
                <stars-icon
                    v-if="type === 'success'"
                    class="BaseBanner__icon"
                    data-cy="base-banner-icon-stars"
                />
            </div>

            <div class="BaseBanner__text-content">
                <label
                    class="BaseBanner__text-content-header"
                    data-cy="base-banner-header"
                >{{ header }}</label>
                <label
                    v-if="subheader"
                    class="BaseBanner__text-content-subheader"
                    data-cy="base-banner-subheader"
                >
                    {{ subheader }}
                </label>
            </div>
        </div>

        <div class="BaseBanner__right">
            <base-button
                v-if="actionText && actionCallback"
                @click="buttonCallback"
                class="BaseBanner__action-btn"
                data-cy="base-banner-action-btn"
                :size="'md'"
                :type="'tertiary'"
            >
                {{ actionText }}
            </base-button>

            <button
                v-if="close"
                @click="$emit('close-toast')"
                class="BaseBanner__close-btn"
                data-cy="base-banner-close-btn"
            >
                <x-close-icon
                    class="BaseBanner__close-icon"
                    data-cy="base-banner-icon-x-close"
                />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
  // Packages
import { useToast } from 'vue-toastification';
// Components
import AlertTriangleIcon from '@src/components/svg/alert-triangle-icon.vue';
import BaseButton from '@src/components/base/base-button.vue';
import CheckCircleIcon from '@src/components/svg/check-circle-icon.vue';
import MessageIcon from '@src/components/svg/message-icon.vue';
import StarsIcon from '@src/components/svg/stars-icon.vue';
import XCloseIcon from '@src/components/svg/x-close-icon.vue';

const emits = defineEmits([ 'close-toast' ]);
const props = defineProps({
    actionCallback: {
        default: null,
        required: false,
        type: Function,
    },
    actionText: {
        default: null,
        required: false,
        type: String,
    },
    close: {
        default: false,
        required: false,
        type: Boolean,
    },
    header: {
        required: true,
        type: String,
    },
    subheader: {
        default: null,
        required: false,
        type: String,
    },
    type: {
        required: true,
        type: String,
        validator: (value: string) => {
            return [
                'error',
                'info',
                'persistent',
                'success',
            ].includes(value);
        },
    },
});

// Because this component is rendered outside of the app (via the vue-toastification plugin),
// it doesn't have access to the provide options from app (even with sharedAppContext: true)
const Toastr = useToast();

const buttonCallback = (): void => {
    if (props.actionCallback) {
        props.actionCallback();
    }

    Toastr.clear();
};
</script>

<style lang="scss">
@use "../../styles/base/colors" as *;
@use "../../styles/base/constants" as *;
@use "../../styles/base/functions" as *;
@use "../../styles/base/mixins" as *;
@use "../../styles/base/typography" as *;
@use "../../styles/base/spacing/box" as *;

.BaseBanner {
    $block: &;
    @include flex($align: center, $justify: space-between);
    border-radius: $border-radius;
    box-shadow: rems(0px) rems(4px) rems(6px) rems(-2px) rgba(16, 24, 40, 0.03), rems(0px) rems(12px) rems(16px) rems(-4px) rgba(16, 24, 40, 0.08);
    padding: $spacing-3;
    width: 100%;

    &__close-btn {
        @include flex($justify: center, $align: center);
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: rems(10px);
    }

    &__close-icon {
        height: rems(20px);
        width: rems(20px);
    }

    &__icon {
        fill: none;
    }

    &__icon-container {
        @include flex($justify: center, $align: center);
        background-color: $base-white;
        border: rems(1px) solid $secondary-200-bg;
        border-radius: $border-radius;
        height: rems(40px);
        margin-right: $spacing-4;
        width: rems(40px);
    }

    &__left {
        @include flex($align: center);
    }

    &__right {
        @include flex($align: center);
    }

    &__text-content {
        @include flex($direction: column);
    }

    &__text-content-header {
        @include text-md;
        font-weight: $fw-semi-bold;
    }

    &__text-content-subheader {
        @include text-md;
        margin-top: $spacing-1;
    }

    &--error {
        background-color: $error-100-bg;
        border: rems(1px) solid $error-200-bg;

        #{$block}__close-icon {
            stroke: $error-900-bg;
        }
        #{$block}__icon {
            stroke: $error-500-bg;
        }
        #{$block}__text-content-header,
        #{$block}__text-content-subheader {
            color: $error-900-bg;
        }
    }

    &--info {
        background-color: $base-white;
        border: rems(1px) solid $secondary-300-bg;

        #{$block}__close-icon {
            stroke: $secondary-700-bg;
        }
        #{$block}__icon {
            stroke: $secondary-25-color;
        }
        #{$block}__text-content-header,
        #{$block}__text-content-subheader {
            color: $secondary-700-bg;
        }
    }

    &--persistent {
        background-color: $primary-25-bg;
        border: rems(1px) solid $primary-300-bg;

        #{$block}__close-icon {
            stroke: $primary-500-bg;
        }
        #{$block}__icon {
            stroke: $primary-700-bg;
        }
        #{$block}__icon-container {
            background-color: $primary-300-bg;
            border-radius: 50%;
        }
        #{$block}__text-content-header,
        #{$block}__text-content-subheader {
            color: $primary-700-bg;
        }
    }
    &--success {
        background-color: $primary-25-bg;
        border: rems(1px) solid $primary-300-bg;

        #{$block}__close-icon {
            stroke: $primary-500-bg;
        }
        #{$block}__icon {
            stroke: $primary-700-bg;
        }
        #{$block}__text-content-header,
        #{$block}__text-content-subheader {
            color: $primary-700-bg;
        }
    }
}
</style>
