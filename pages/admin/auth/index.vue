<template lang='pug'>
  .admin-auth-page
    .auth-container
      form(@submit.prevent='onSubmit')
        AppControlInput(v-model='email' type='email') E-Mail Address
        AppControlInput(v-model='password' type='password') Password
        AppButton(type='submit') {{ isLogin ? "Login" : "Sign Up" }}
        AppButton(type='button' btn-style='inverted' style='margin-left: 10px' @click='isLogin = !isLogin') Switch to {{ isLogin ? "Signup" : "Login" }}
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {

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

