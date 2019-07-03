<template lang='pug'>
  .admin-page
    section.new-post
      button(@click='createPost') Create Post
    section.existing-post
      PostList(isAdmin)
</template>

<script>
import PostList from '~/components/posts/PostList'
export default {
  components: {
    PostList
  },
  methods: {
    createPost() {
      this.$router.push('/admin/new-post')
    }
  }
}
</script>

<style scoped lang='sass'>
  .admin-page
    padding: 20px

  .new-post
    text-align: center
    border-bottom: 2px solid #ccc
    padding-bottom: 10px

  .existing-posts h1
    text-align: center
</style>