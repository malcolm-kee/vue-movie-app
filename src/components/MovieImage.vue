<template>
    <img :src="imageUrl" />
</template>

<script>
export default {
  name: 'MovieImage',
  props: ['filename', 'imageSize'],
  computed: {
    imageUrl() {
      return this.$store.getters['meta/getMovieImageBaseUrl'](this.imageSize) + this.filename;
    }
  }
};
</script>

<style scoped>
</style>