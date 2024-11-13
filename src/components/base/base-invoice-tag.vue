<script setup>
  const props = defineProps({
    type: {
      required: true,
      type: String,
      validator: (value) => {
        return [
          'error',
          'success',
          'warning',
        ].includes(value);
      },
    },
  });
</script>

<template>
  <label
    :class="`BaseInvoiceTag BaseInvoiceTag--${type}`"
    data-cy="base-tag"
  >
    <slot />
  </label>
</template>

<style lang="sass">
.BaseInvoiceTag
  +text-md
  border-radius: rems(16px)
  font-weight: $fw-medium
  line-height: 1
  padding: rems(2px) $spacing-2

  &--error
    background-color: $error-50-bg
    color: $error-700-bg

  &--success
    background-color: $primary-25-bg
    color: $primary-700-bg

  &--warning
    background-color: $warning-50-bg
    color: $warning-700-bg
</style>
