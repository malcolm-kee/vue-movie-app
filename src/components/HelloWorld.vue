<template>
  <div>
    <Navbar />
    <div class="hello">
      <h1>Vue Movie App</h1>
      <h2>Discover</h2>
      <ul>
        <li>
          <router-link to="/popular">Popular Movies</router-link>
        </li>
        <li>
          <router-link to="/about">About This Site</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  name: 'HelloWorld',
  components: {
    Navbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
