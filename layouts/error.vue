<template lang='pug'>
  .error-page
    h1 Oops, something went wrong!
    p
      | Back to 
      a(href='/') safety
      | !
</template>

<style scoped lang='sass'>
.error-page
  text-align: center
  a
    text-decoration: none
    color: red
    &:hover, &:active
      color: salmon
</style>
