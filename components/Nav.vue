<template>
  <nav class="nav line v-centered">
    <div class="burger__container">
      <Burger :onclick="openMenu"/>
    </div>
    <nuxt-link class="nav__link" to="/">Inicio</nuxt-link>
    <nuxt-link class="nav__link" to="/candidatos">Candidatos</nuxt-link>
    <!-- <nuxt-link class="nav__link" to="/financiadores">Financiadores</nuxt-link> -->
    <nuxt-link class="nav__link" to="/explora">Explora</nuxt-link>
    <nuxt-link class="nav__link" to="/datos">Datos</nuxt-link>
    <nuxt-link class="nav__link" to="/nosotros">Nosotros</nuxt-link>
    <div class="nav__spacer"></div>
    <div class="nav__actions line v-centered">
      <a href="https://twitter.com/transparenciaco" target="_blank" class="twitter icon"><font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon></a>
      <a href="http://facebook.com/transparenciaporcolombia" target="_blank" class="facebook icon"><font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon></a>
    </div>
  </nav>
</template>

<script>
import Burger from '~/components/Burger'

export default {
  name: 'Nav',
  components: { Burger },
  methods: {
    openMenu (event) {
      event.target.classList.toggle('active')
    },
  }
}
</script>

<style scoped>
.burger__container {
  padding: 15px 15px 15px 0;
}

.nav {
  background: #ffffff;
  padding: 0 5%;
  position: sticky;
  top: 0px;
  z-index: 1;
}

.nav__link {
  color: #501981;
  font-family: 'Maven Pro Bold', sans-serif;
  padding: 15px;
  text-decoration: none;
  display: none;
}

.nav__link.nuxt-link-exact-active.nuxt-link-active {
  border-bottom: 5px solid #B1C2DE;
}

.nav__spacer {
  flex: 1 0 auto;
}

.facebook {
  color: #3b5998;
}

.twitter {
  color: #1da1f2;
}

.icon {
  font-size: 18px;
  margin-right: 5px;
}

img {
  max-width: 100px;
  cursor: pointer;
}

@media screen and (min-width: 992px) {
  .burger__container {
    display: none;
  }
  .nav__link {
    display: block;
  }
}
</style>
