<template lang='pug'>
  div.posts-page
    PostList(:posts='loadedPosts')
</template>

<script>
export default {
  computed: {
    loadedPosts(state) {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped lang='sass'>
  .posts-page
    display: flex
    justify-content: center
    align-items: center
</style>
