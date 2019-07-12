<template lang='pug'>
  .admin-post-page
    section.update-form
      AdminPostForm(:post="loadedPost" @submit="onSubmitted")
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm'
import axios from 'axios'

export default {
  layout: 'admin',
  components:{
    AdminPostForm
  },
  asyncData(context) {
    return axios({
      method: 'GET',
      url: `https://udemy-nuxt-course-fb043.firebaseio.com/posts/${context.params.postid}.json`,
    })
      .then(({ data }) => {
        return {
          loadedPost: data
        }

      })
      .catch(error => context.error(error))
  },
  methods: {
    onSubmitted(postData, updatedDate) {
      console.log(postData)
      axios({
        method: 'PUT', 
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
  .update-form
    width: 90%
    margin: 20px auto

  @media (min-width: 768px)
    .update-form
      width: 500px
</style>