<template>
  <nav class="line nav align-start">
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
      <img src="~/assets/images/accion.png" alt="Acción ciudadana" @click="openModal">
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
      modal: {
        title: 'Acción ciudadana',
        buttons: {
          cancel: 'Cerrar'
        },
        content: null
      }
    }
  },
  methods: {
    openMenu (event) {
      event.target.classList.toggle('active')
    },
    openModal () {
      this.$swal(this.modal)
    },
    modalContent () {
      const html = `
        <div class="modal__content">
          <p class="modal__title">Seguimiento de procesos electorales</p>
          <ul class="entities">
            <li class="column entity">
              <span class="entity__name">Unidad de Recepción Inmediata para la Transparencia Electoral</span>
              <a class="entity__url" href="https://uriel.mininterior.gov.co/" target="_blank">uriel.mininterior.gov.co</a>
              <span>denunciasuriel@mininterior.gov.co</span>
              <span>01 8000 912005</span>
            </li>
            <li class="column entity">
              <span class="entity__name">Canales de atención Consejo Nacional Electoral</span>
              <a class="entity__url" href="http://www.cne.gov.co/" target="_blank">www.cne.gov.co</a>
              <span>atencionalciudadano@cne.gov.co</span>
              <span>PBX: (1) 2200 800/span>
            </li>
          </ul>
          <p class="modal__title">Transparencia electoral</p>
          <ul class="entities">
            <li class="column entity">
              <span class="entity__name">Centro de Asesoría Legal Anticorrupción ALAC</span>
              <a class="entity__url" href="http://transparenciacolombia.org.co/" target="_blank">transparenciacolombia.org.co</a>
            </li>
          </ul>
        </div>
      `
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const template = doc.body.firstChild
      return template
    }
  },
  mounted () {
    this.modal.content = this.modalContent()
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

.nav__actions {
  position: fixed;
  top: 0;
  right: 5%;
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
