<template lang='pug'>
  .admin-post-page
    section.update-form
      AdminPostForm(:post="loadedPost")
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm'

export default {
  components:{
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'Adel',
        title: 'My awesome post',
        content: 'Content of the post',
        thumbnail: 'https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg'
      }
    }
  }
}
</script>

<style scoped lang='sass'>
  .update-form
    width: 90%
    margin: 20px auto

  @media (min-width: 768px)
    .update-form
      width: 500px
</style>