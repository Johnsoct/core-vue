<script setup lang="ts">
  // Packages
  import { computed } from 'vue';
  // Helpers
  import {
    convertBigToDollars,
    convertPenniesToBig,
  } from '@src/utils/math/big';

  const props = defineProps({
    pennies: {
      required: true,
      type: String,
    },
  });

  const displayValue = computed<string>(() => {
    if (props.pennies === '0') {
      return 'Settled';
    }
    else {
      const dollarsFromPennies: number = Number(convertBigToDollars(convertPenniesToBig(props.pennies)));
      return new Intl
        .NumberFormat('en-US', { currency: 'USD', style: 'currency' })
        .format(dollarsFromPennies);
    }
  });
</script>

<template>
  <label
    :class="['BaseReservesTag', {
      'BaseReservesTag--negative': pennies < '0',
      'BaseReservesTag--positive': pennies > '0',
      'BaseReservesTag--settled': pennies === '0',
    }]"
    data-cy="base-tag"
  >
    {{ displayValue }}
  </label>
</template>

<style lang="sass">
.BaseReservesTag
  border-radius: rems(16px)
  font-weight: $fw-medium
  line-height: 1
  padding: rems(2px) $spacing-2

  &--negative
    +display-xs
    background-color: $error-50-bg
    color: $error-700-bg
    font-weight: $fw-semi-bold

  &--positive
    +display-xs
    background-color: $success-50-bg
    color: $success-25-color
    font-weight: $fw-semi-bold

  &--settled
    +text-md
    background-color: $success-50-bg
    color: $success-25-color
</style>
