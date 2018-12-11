<template>
  <div id="wrapper" class="column">
    <Notification />
    <Nav />
    <Sidebar />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import Nav from '~/components/Nav'
import Sidebar from '~/components/Sidebar'
import Notification from '~/components/Notification'

export default {
  components: { Footer, Nav, Sidebar, Notification }
}
</script>

<style>
@import url(~/assets/main.css);

#wrapper {
  min-height: 100vh;
}
</style>
