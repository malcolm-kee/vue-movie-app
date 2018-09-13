<template>
    <article class="movie-list-item">
        <h1>{{title}}</h1>
        <h2>released on {{releasedOn}}</h2>
        <div class="description">
            {{overview}}
        </div>
    </article>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: ['id', 'title', 'releasedOn', 'overview']
};
</script>

<style scoped>
</style>