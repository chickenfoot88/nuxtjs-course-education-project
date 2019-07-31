<template lang='pug'>
  .admin-page
    section.new-post
      AppButton(@click='createPost') Create Post
      AppButton(@click='onLogout' style="margin-left: 10px") Logout
    section.existing-post
      PostList(isAdmin :posts='loadedPosts')
</template>

<script>
export default {
  layout: 'default',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedPosts(state) {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    createPost() {
      this.$router.push('/admin/new-post')
    },
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
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