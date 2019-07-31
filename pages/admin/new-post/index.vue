<template lang='pug'>
  .admin-new-post-page
    section.new-post-form
      AdminPostForm(@submit="onSubmitted")
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm'

export default {
  middleware: ['check-auth', 'auth'],
  components:{
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
     this.$store.dispatch('addPost', postData)
      .then(() => { this.$router.push('/admin') })
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