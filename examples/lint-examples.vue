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

<template>
  <div class="test" id="test">
    <label class="test">text</label>
  </div>

  <label class=""></label>

  <label v-html="">text</label>
</template>

<style lang="sass">

</style>
