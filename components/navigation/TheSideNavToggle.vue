<template lang='pug'>
  .drawer-toggle(role='button' @click="$emit('toggle')")
    .bar
    .bar
    .bar
</template>

<style scoped lang='sass'>
  .drawer-toggle
    display: flex
    flex-direction: column
    justify-content: space-around
    height: 50%
    width: 35px
    cursor: pointer
    .bar
      width: 90%
      height: 2px
      background-color: white

  @media (min-width: 768px)
    .drawer-toggle
      display: none
</style>
