<template lang='pug'>
  div.header-container
    header.the-header
      TheSideNavToggle(@toggle="$emit('sidenavToggle')")
      div.logo
        nuxt-link(to='/') WD BLOG
      .spacer
      div.navigation-items
        ul.nav-list
          li.nav-item
            nuxt-link(to='/posts') Blog
          li.nav-item
            nuxt-link(to='/about') About
          li.nav-item
            nuxt-link(to='/admin') Admin
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>

<style scoped lang='sass'>
  .header-container
    height: 60px

  .the-header
    width: 100%
    position: fixed
    height: 60px
    display: flex
    justify-content: space-around
    align-items: center
    background-color: black
    z-index: 100
    box-sizing: border-box
    padding: 0 20px

  .logo
    margin: 0 10px
    font-size: 1.3rem
    a
      text-decoration: none
      color: white

  .spacer
    flex: 1

  .navigation-items
    display: none

  @media (min-width: 768px)
    .navigation-items
      display: block

  .nav-list
    list-style: none
    padding: 0
    margin: 0
    display: flex

  .nav-item
    margin: 0 10px
    a
      text-decoration: none
      color: white
      &:hover, &:active, &.nuxt-link-active
        color: red
</style>
