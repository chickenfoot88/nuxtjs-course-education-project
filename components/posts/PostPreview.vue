<template lang='pug'>
  nuxt-link.post-preview(:to="`/posts/${id}`")
      div.post-thumbnail(:style="{ backgroundImage: `url(${thumbnail})` }")
      div.post-content
        h1 {{ title }}
        p {{ previewText }}
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang='sass'>
  .post-preview
    border: 1px solid #ccc
    box-shadow: 0 2px 2px #ccc
    background-color: white
    width: 90%

  a
    text-decoration: none
    color: black

  @media (min-width: 850px)
    .post-preview
      width: 400px
      margin: 10px

  .post-thumbnail
    width: 100%
    height: 200px
    background-position: center
    background-size: cover

  .post-content
    padding: 10px
    text-align: center

  a
    &:hover .post-content, &:active .post-content
      background-color: #ccc
</style>