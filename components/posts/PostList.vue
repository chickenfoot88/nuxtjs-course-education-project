<template lang='pug'>
  section.post-list
    PostPreview(
      v-for='post in posts'
      :key='post.id'
      :id='post.id'
      :is-admin="isAdmin"
      :title='post.title'
      :thumbnail='post.thumbnail'
      :previewText='post.previewText')
</template>

<script>
import PostPreview from './PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang='sass'>
  .post-list
    display: flex
    padding: 20px
    box-sizing: border-box
    flex-wrap: wrap
    align-items: center
    justify-content: center
</style>