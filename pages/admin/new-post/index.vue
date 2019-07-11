<template lang='pug'>
  .admin-new-post-page
    section.new-post-form
      AdminPostForm(@submit="onSubmitted")
</template>

<script>
import axios from 'axios'
import AdminPostForm from '~/components/admin/AdminPostForm'

export default {
  components:{
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      axios({
        method: 'POST', 
        ulr: 'https://udemy-nuxt-course-fb043.firebaseio.com/posts.json',
        data: postData
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang='sass'>
  .new-post-form
    width: 90%
    margin: 20px auto

  @media (min-width: 768px)
    .new-post-form
      width: 500px
</style>