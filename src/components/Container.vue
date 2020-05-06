<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Container',
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
