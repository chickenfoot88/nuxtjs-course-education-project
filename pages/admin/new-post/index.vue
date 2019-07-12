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
    onSubmitted(postData, updatedDate) {
      axios({
        method: 'POST', 
        url: 'https://udemy-nuxt-course-fb043.firebaseio.com/posts.json',
        data: { ...postData, updatedData: new Date() }
      })
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        console.error('error', error)
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