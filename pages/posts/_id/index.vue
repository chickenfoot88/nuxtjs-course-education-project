<template lang="pug">
  div.single-post-page
    section.post
      h1.post-title {{ loadedPost.title }}
      div.post-details Post details
        div.post-detail Last updated on {{ loadedPost.updatedDate }}
        div.post-detail Written by {{ loadedPost.author }}
      p.post-content {{ loadedPost.content }}

    section.post-feedback
      p Let me know whar you think about the post, send a mail to 
        a(href="mailto:adel55@mai.ru") adel55@mail.ru
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(new Error(), {
        loadedPost:           {
          id: '1',
          title: `First Post (ID ${context.params.id})`,
          previewText: 'first post',
          author: 'Adel',
          updatedDate: new Date(),
          content: 'Some dummy text wich is definitely not the preview text',
          thumbnail: 'https://www.cg.nl/wp-content/uploads/2018/06/tech-header-01.jpg',
        },
      })
    }, 1000);
  }
}
</script>


<style lang="sass" scoped>
.single-post-page
  padding: 30px
  text-align: center
  box-sizing: border-box

.post
  width: 100%

@media (min-width: 768px)
  .post
    width: 600px
    margin: auto

.post-title
  margin: 0

.post-details
  padding: 10px
  box-sizing: border-box
  border-bottom: 3px solid #ccc
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

@media (min-width: 768px)
  .post-details
    flex-direction: row

.post-detail
  color: rgb(88, 88, 88)
  margin: 0 10px

.post-feedback a
  color: red
  text-decoration: none
  &:hover, &:active
    color: salmon
</style>
