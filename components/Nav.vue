<template>
  <nav class="line nav">
    <nuxt-link class="nav__link" to="/">Inicio</nuxt-link>
    <nuxt-link class="nav__link" to="/candidatos">Candidatos</nuxt-link>
    <nuxt-link class="nav__link" to="/financiadores">Financiadores</nuxt-link>
    <nuxt-link class="nav__link" to="/explora">Explora</nuxt-link>
    <nuxt-link class="nav__link" to="/datos">Datos</nuxt-link>
    <nuxt-link class="nav__link" to="/nosotros">Nosotros</nuxt-link>
    <!-- <div class="nav__actions line v-centered">
      <a href="http://facebook.com/transparenciaporcolombia" target="_blank" class="facebook"><font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon></a>
      <a href="https://twitter.com/transparenciaco" target="_blank" class="twitter"><font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon></a>
      <img src="~/assets/images/accion.png" alt="Acción ciudadana">
    </div> -->
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}                                                                                                                                                                               
</script>

<style scoped>
.nav {
  background: #ffffff;
  position: sticky;
  top: 0px;
  z-index: 1;
}

.nav__link {
  color: #501981;
  font-family: 'Maven Pro Bold', sans-serif;
  padding: 15px;
  text-decoration: none;
}

.nav__link.nuxt-link-exact-active.nuxt-link-active {
  border-bottom: 5px solid #B1C2DE;
}

.facebook {
  color: #3b5998;
}

.twitter {
  color: #1da1f2;       
}

img {
  max-width: 100px;
}
</style>
