<template>
    <button class="container" aria-label="back" tabindex="0" @click="$router.go(-1)" >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <path d="M30 16.5H11.74l8.38-8.38L18 6 6 18l12 12 2.12-2.12-8.38-8.38H30v-3z" fill="white" />
        </svg>
    </button>
</template>

<script>
export default {
  name: 'BackIcon'
};
</script>

<style scoped>
.container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
  background: transparent;
  appearance: none;
  border: 0;
  cursor: pointer;
}

.container:focus {
  background: rgba(0, 0, 0, 0.1);
  outline: none;
  border: 0;
}
</style>