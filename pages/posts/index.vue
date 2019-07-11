<template lang='pug'>
  div.posts-page
    PostList(:posts='loadedPosts')
</template>

<script>
import PostList from '~/components/posts/PostList'
export default {
  components: {
    PostList
  },
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
