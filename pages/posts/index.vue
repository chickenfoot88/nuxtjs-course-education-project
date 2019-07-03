<template lang='pug'>
  div.posts-page
    PostList
</template>

<script>
import PostList from '~/components/posts/PostList'
export default {
  components: {
    PostList
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style scoped lang='sass'>
  .posts-page
    display: flex
    justify-content: center
    align-items: center
</style>
