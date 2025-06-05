<template>
    <div class="BaseBeatLoader">
        <div class="BaseBeatLoader__beat BaseBeatLoader__beat--one" />
        <div class="BaseBeatLoader__beat BaseBeatLoader__beat--two" />
        <div class="BaseBeatLoader__beat BaseBeatLoader__beat--three" />
    </div>
</template>

<style lang="scss">
@use "../../styles/base/colors" as *;
@use "../../styles/base/functions" as *;
@use "../../styles/base/mixins" as *;
@use "../../styles/base/spacing/box" as *;

.BaseBeatLoader {
    @include flex($align: center, $justify: center);

    &__beat {
        animation-duration: 1.5s;
        animation-direction: normal;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
        animation-name: fcBeatDelay;
        background-color: #035953;
        border-radius: 50%;
        height: rems(12px);
        width: rems(12px);
        display: inline-block;
        margin: $spacing-1;

        &--one {
            animation-delay: 0s;
        }

        &--two {
            animation-delay: 0.2s;
        }

        &--three {
            animation-delay: 0.4s;
        }

        @keyframes fcBeatDelay {
        0% {
            opacity: 0;
            transform: scale(0);
        }

        50% {
            opacity: 1;
            transform: scale(1);
        }

        100% {
            opacity: 0;
            transform: scale(0);
        }
        }
    }
}
</style>
