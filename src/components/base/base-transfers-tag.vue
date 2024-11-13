<script setup lang="ts">
  // Packages
  import { computed } from 'vue';
  // Components
  import LightningBolt from '@src/components/svg/lightning-bolt.vue';

  const props = defineProps({
    type: {
      required: true,
      type: String,
      validator: (value: string) => {
        return [
          'ach',
          'expedited',
        ].includes(value);
      },
    },
  });

  const displayValue = computed((): string => {
    if (props.type === 'ach') {
      return 'Regular';
    }
    else {
      return 'Expedited';
    }
  });
</script>

<template>
  <label
    :class="['BaseTransfersTag', {
      'BaseTransfersTag--ach': type === 'ach',
      'BaseTransfersTag--expedited': type === 'expedited',
    }]"
    data-cy="base-tag"
  >
    <lightning-bolt
      v-if="type === 'expedited'"
      class="BaseTransfersTag__lightning-bolt"
      data-cy="base-tag-icon"
    />
    {{ displayValue }}
  </label>
</template>

<style lang="sass">
.BaseTransfersTag
  +flex($align: center)
  border-radius: rems(4px)
  font-weight: $fw-medium
  line-height: 1
  padding: $spacing-1 $spacing-2

  &__lightning-bolt
    fill: $warning-500-bg
    height: rems(17px)
    margin-right: $spacing-2
    stroke: $warning-500-bg
    width: rems(14px)

  &--ach
    +text-md
    background-color: $secondary-200-bg
    color: $secondary-600-bg

  &--expedited
    +text-md
    background-color: $primary-25-bg
    color: $primary-25-color
</style>
