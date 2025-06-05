<template>
    <div
        class="test"
        id="test"
    >
        <label class="test">text</label>
    </div>

    <label class="" />

    <label v-html="">text</label>
</template>

<script setup lang="ts">
  // Packages
  // Components
  // Helpers

  // Should complain about semi and spacing between []
const missingSemiColon = []
const arrWithNoSpaces = ['a', 'b', 1]

// Should complain about types
arrWithNoSpaces.push({ test: true });
</script>

<style lang="sass">

</style>
