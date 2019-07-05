<template lang='pug'>
  .admin-auth-page
    .auth-container
      form
        AppControlInput(type='email') E-Mail Address
        AppControlInput(type='password') Password
        AppButton(type='submit') {{ isLogin ? &apos;Login&apos; : &apos;Sign Up&apos; }}
        AppButton(type='button' btn-style='inverted' style='margin-left: 10px' @click='isLogin = !isLogin') Switch to {{ isLogin ? &apos;Signup&apos; : &apos;Login&apos; }}
</template>

<script>
import AppControlInput from '~/components/UI/AppControlInput'
import AppButton from '~/components/UI/AppButton'

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped lang='sass'>
.admin-auth-page
  padding: 20px

.auth-container
  border: 1px solid #ccc
  border-radius: 5px
  box-shadow: 0 2px 2px #ccc
  width: 300px
  margin: auto
  padding: 10px
  box-sizing: border-box
</style>

