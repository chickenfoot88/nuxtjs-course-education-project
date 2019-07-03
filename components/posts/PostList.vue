<template lang='pug'>
  section.post-list
    PostPreview(
      id="1"
      title="Post 1 title"
      thumbnail="https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg"
      previewText="Post 1 preview text")
    PostPreview(
      id="2"
      title="Post 2 title"
      thumbnail="https://aithority.com/wp-content/uploads/2019/04/StorONE-Ramps-Up-Distribution-of-Unified-Enterprise-Storage-Solutions-With-Tech-Data-Partnership.jpg"
      previewText="Post 2 preview text")
    PostPreview(
      id="3"
      title="Post 3 title"
      thumbnail="https://www.itic.org/dotAsset/bb16ba6f-2265-43e0-ab25-bbef96984ddb.jpg"
      previewText="Post 3 preview text")
</template>

<script>
import PostPreview from './PostPreview'
export default {
  components: {
    PostPreview
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