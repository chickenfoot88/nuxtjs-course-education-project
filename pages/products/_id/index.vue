<template lang="pug">
  h1 A single product, with ID: {{ $route.params.id }}
</template>

<script>
export default {
  validate(data) {
    console.log(data)
    return /^\d+$/.test(data.params.id)
  }
}
</script>

<style>

</style>
