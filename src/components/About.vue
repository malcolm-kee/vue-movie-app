<template>
  <div>
    <Navbar />
    <main>
      <Container>
        <h1>About this site</h1>
        <p>
          This site is created by
          <a href="http://malcolmkee.com">Malcolm Kee</a> using
          <a href="https://vuejs.org/">VueJS</a> as frontend.
        </p>
        <p>
          It uses the
          <a href="https://www.themoviedb.org" title="The Movie DB">TMDb</a> API but is not endorsed or certified by
          TMDb.
        </p>
      </Container>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './Navbar.vue';
import Container from './Container.vue';

export default Vue.extend({
  name: 'About',
  components: {
    Container,
    Navbar,
  },
});
</script>

<style scoped>
main {
  padding: 8px;
}
</style>
