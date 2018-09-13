<template>
  <div id="wrapper" class="column">
    <Nav />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import Nav from '~/components/Nav'

export default {
  components: { Footer, Nav }
}
</script>

<style>
@import url(~/assets/main.css);

#wrapper {
  min-height: 100vh;
}
</style>
