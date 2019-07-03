<template lang='pug'>
  button.button(:class="btnStyle" v-bind="$attrs" @="$listeners")
    slot
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped lang='sass'>
  .button
    font: inherit
    background-color: black
    color: white
    padding: 5px
    cursor: pointer
    border: 1px solid black
    &:hover, &:active
      background-color: rgb(51, 51, 51)
      border: 1px solid black

  .inverted
    background-color: white
    color: black
    border: 1px solid transparent
    &:hover, &:active
      color: #ccc
      background-color: white
      border: 1px solid transparent

  .cancel
    background-color: red
    color: white
    border: 1px solid transparent
    &:hover, &:active
      background-color: salmon
      border: 1px solid transparent
      color: white
</style>
