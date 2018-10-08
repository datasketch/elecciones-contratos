<template>
  <nav class="nav line v-centered justify-between">
    <div class="bar_mobile">
      <div class="burger__container">
        <Burger :onclick="handleMenu"/>
      </div>
    </div>
    <div class="bar line v-centered">
      <nuxt-link class="nav__link" to="/">Inicio</nuxt-link>
      <nuxt-link class="nav__link" to="/elecciones">Elecciones</nuxt-link>
      <nuxt-link class="nav__link" to="/contratos">Contratos</nuxt-link>
      <nuxt-link class="nav__link" to="/datos">Datos</nuxt-link>
      <nuxt-link class="nav__link" to="/nosotros">Nosotros</nuxt-link>
    </div>
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
  data () {
    return {
      sidebar: null,
      switched: false
    }
  },
  mounted () {
    this.sidebar = document.querySelector('.sidebar')
  },
  methods: {
    handleMenu (event) {
      event.target.classList.toggle('active')
      this.sidebar.classList.toggle('open')
      document.body.classList.toggle('pushed')
    }
  }
}
</script>

<style scoped>
.burger__container {
  padding: 10px 0;
}

.nav {
  background: #ffffff;
  padding: 0 5%;
  position: sticky;
  top: 0px;
  z-index: 15;
}

.bar {
  display: none;
}

.bar_mobile {
  display: block;
}

.nav__link {
  border-bottom: 5px solid transparent;
  color: #501981;
  font-family: 'Maven Pro Bold', sans-serif;
  padding: 15px;
  text-decoration: none;
}

.nav__link.nuxt-link-exact-active.nuxt-link-active {
  border-bottom-color:#B1C2DE;
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
  .bar {
    display: flex;
  }
  .bar_mobile {
    display: none;
  }
}
</style>
