<template lang="pug">
  div.single-post-page
    section.post
      h1.post-title Title of the Post
      div.post-details Post details
        div.post-detail Last updated on xx.xx.xxxx
        div.post-detail Written by NAME
      p.post-content Content of the post

    section.post-feedback
      p Let me know whar you think about the post, send a mail to 
        a(href="mailto:adel55@mai.ru") adel55@mail.ru
</template>

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
