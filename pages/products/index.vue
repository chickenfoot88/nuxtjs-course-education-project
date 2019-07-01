<template lang='pug'>
  div
    h2 Products list
    ul
      li(v-for='product in products' :key='product.pid' @click='onLoadProduct(product.pid)') {{ product.name }}
</template>

<script>
  export default {
    name: 'product',
    data () {
      return {
        products: [
          {
            pid: 1,
            name: 'books',
          },
          {
            pid: 2,
            name: 'films'
          },
          {
            pid: 3,
            name: 'magazines'
          }
        ]
      }
    },
    methods: {
      onLoadProduct (id) {
        this.$router.push('/products/' + id)
      }
    }
  }
</script>
