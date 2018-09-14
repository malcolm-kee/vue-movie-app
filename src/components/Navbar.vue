<template>
    <div>
    <nav class="nav-bar">
        <ul>
          <li v-if="showBack">
            <BackIcon></BackIcon>
          </li>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/popular">Popular</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </nav>
    <div class="filler"></div>
    </div>
</template>

<script>
import BackIcon from './BackIcon';

export default {
  name: 'Navbar',
  props: ['showBack'],
  components: {
    BackIcon
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  display: block;
  width: 100%;
  z-index: 50;
  padding: 4px;
  background: #6d1b7b;
  color: #fff;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12);
}
.filler {
  height: 56px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 48px;
}
li {
  display: inline-block;
  height: 48px;
  line-height: 48px;
  vertical-align: middle;
  margin: 0 10px;
}
a {
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
}
a:focus {
  outline: none;
  border-bottom: 1px solid #fff;
}
</style>