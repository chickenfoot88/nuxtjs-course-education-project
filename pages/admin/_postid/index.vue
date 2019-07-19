<template lang='pug'>
  .admin-post-page
    section.update-form
      AdminPostForm(:post="loadedPost" @submit="onSubmitted")
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm'
import axios from 'axios'

export default {
  layout: 'default',
  components:{
    AdminPostForm
  },
  asyncData(context) {
    return axios.get(`https://udemy-nuxt-course-fb043.firebaseio.com/posts/${context.params.postId}.json`)
      .then(({ data })=> {
        return { loadedPost: { ...data, id: context.params.postId } }
      })
      .catch((error) => { context.error(error) })
  },
  methods: {
    async onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => { this.$router.push('/admin') })
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