<template lang='pug'>
  div.posts-page
    PostList(:posts='loadedPosts')
</template>

<script>
import PostList from '~/components/posts/PostList'
export default {
  components: {
    PostList
  },
  fetch(context) {
    if(context.store.state.loadedPosts.length > 0) {
      return null
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: 'title',
              previewText: 'first post',
              thumbnail: 'https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg'
            },
            {
              id: '2',
              title: 'title 2',
              previewText: 'first post',
              thumbnail: 'https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg'
            },
            {
              id: '3',
              title: 'title 3',
              previewText: 'first post',
              thumbnail: 'https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg'
            }
          ]
        })
      }, 1500);
    })
    .then(response => {
      context.store.commit('setPosts', response.loadedPosts)
    })
    .catch(error => {
      context.error(error)
    })
  },
  computed: {
    loadedPosts(state) {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped lang='sass'>
  .posts-page
    display: flex
    justify-content: center
    align-items: center
</style>
