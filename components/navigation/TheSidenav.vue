<template lang='pug'>
  .sidenav-container
    .sidenav-backdrop(v-if='show' @click="$emit('close')")
    transition(name='slide-side')
      .sidenav(v-if='show')
        ul.nav-list(@click="$emit('close')")
          li.nav-item
            nuxt-link(to='/posts') Blog
          li.nav-item
            nuxt-link(to='/about') About
          li.nav-item
            nuxt-link(to='/admin') Admin
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped lang='sass'>
  .sidenav-container
    height: 100%
    width: 100%

  .sidenav-backdrop
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.7)
    z-index: 1000
    position: fixed
    top: 0
    left: 0

  .sidenav
    height: 100%
    width: 300px
    background-color: white
    z-index: 10000
    position: fixed
    top: 0
    left: 0
    box-sizing: border-box
    padding: 30px

  .slide-side-enter-active, .slide-side-leave-active
    transition: all 0.3s ease-out

  .slide-side-enter, .slide-side-leave-to
    transform: translateX(-100%)

  .nav-list
    list-style: none
    padding: 0
    margin: 0

  .nav-item
    margin: 20px 0
    a
      text-decoration: none
      color: black
      font-size: 1.5rem
      &:hover, &:active
        color: red
</style>
