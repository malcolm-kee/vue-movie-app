<template>
    <div>
        <Navbar />
        <main>
            <h1>About this site</h1>
            <p>This site is created by <a href="http://malcolmkee.com">Malcolm Kee</a> using <a href="https://vuejs.org/">VueJS</a> as frontend.</p>
            <p>It uses the <a href="https://www.themoviedb.org" title="The Movie DB">TMDb</a> API but is not endorsed or certified by TMDb.</p>
        </main>
    </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  name: 'About',
  components: {
    Navbar
  }
};
</script>

<style scoped>
main {
  padding: 8px;
}
</style>