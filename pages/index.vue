<template>
  <main class="item-fill">
    <transition name="modal">
      <Modal v-if="modal.show" @close="modal.show = false">
        <template slot="header">
          <h2>{{ modal.info.nombre | name }}</h2>
        </template>
        <div slot="body" class="column">
          <p style="margin: 0 0 10px">{{ modal.info.text }}</p>
          <nuxt-link class="button item-end" :to="'/candidatos?node_id=' + modal.info.iden">Ver más</nuxt-link>
          <iframe :src="modal.info.network" frameborder="0" width="100%" style="min-height: 500px"></iframe>
        </div>
      </Modal>
    </transition>
    <div class="banner container">
      <div class="banner__title">
        <h1 class="title">Elecciones y contratos</h1>
        <div class="banner__icons line v-centered">
          <img src="~/assets/images/banner_icon_1.png">
          <img src="~/assets/images/banner_icon_2.png">
          <img src="~/assets/images/banner_icon_3.png">
          <img src="~/assets/images/banner_icon_4.png">
        </div>
      </div>
      <div class="banner__content">
        <p>Elecciones y contratos es una solución tecnológica que permite conocer datos acerca de los candidatos a cargos de elección popular y sus financiadores. Aporta al control social y facilita la realización de cruces de información entre datos oficiales de financiación de campañas electorales suministrados por Cuentas Claras y datos de contratación pública oficiales suministrados por SECOP</p>
      </div>
    </div>
    <!-- Search -->
    <div class="search container__inner">
      <h1 class="subtitle line centered nowrap">
        <img src="~/assets/images/search.png" alt="Lupa" width="50">
        <span>Busca por nombre o cédula</span>
      </h1>
      <input type="text" @keyup="filter" class="search__input" v-model="search" placeholder="Escribe nombre o cédula del candidato">
    </div>
    <Loader v-if="loading" :size="40" :borderWidth="4" message="Cargando"/>
    <transition name="results">
      <div class="results" v-if="list.length">
        <result-card  v-for="(person, index) in list" :key="index" :person="person"></result-card>
      </div>
    </transition>
    <!-- Search -->
    <div class="findings container">
      <h2 class="subtitle">Datos destacados</h2>
      <div class="findings__tabs">
        <tabs :options="{ useUrlFragment: false }" @changed="tabChanged">
          <tab
            v-for="(item, index) in destacados"
            :key="index"
            :name="item.title"
          >
            <template v-for="(chart, index) in item.charts">
              <div :key="index" class="findings__content">
                <h3>{{ chart.title }}</h3>
                <div class="findings__description">
                  <p>{{ chart.text }}</p>
                  <iframe :src="chart.chart" frameborder="0"></iframe>
                </div>
              </div>
            </template>
          </tab>
        </tabs>
      </div>
    </div>
    <div class="recommended container__inner">
      <div class="recommended__title">
        <h1 class="subtitle">Recomendados</h1>
        <p>Haz click en los personajes para descubrir sus financiadores y los contratos que estos tienen</p>
      </div>
      <div class="recommended__photos">
        <a
          class="column recommended__item"
          v-for="(recomendado, index) in recomendados"
          @click.prevent="showModal(recomendado)"
          :key="index">
          <img class="recommended__photo" src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png">
          <p class="recommended__name"><small>{{recomendado.nombre | name}}</small></p>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import ResultCard from '~/components/ResultCard'
import Loader from '~/components/Loader'
import Modal from '~/components/Modal'
import debounce from 'lodash.debounce'
import destacados from '~/static/destacados.json'
import recomendados from '~/static/recomendados.json'

export default {
  head () {
    return {
      title: 'Elecciones y contratos'
    }
  },
  components: { ResultCard, Loader, Modal },
  data () {
    return {
      findings: [],
      search: '',
      list: [],
      destacados,
      recomendados,
      loading: false,
      modal: {
        show: false,
        info: undefined
      }
    }
  },
  computed: {
    ...mapState(['people'])
  },
  mounted () {
    this.findings = Array.from(document.querySelectorAll('.finding'))
  },
  methods: {
    filter () {
      this.loading = true
      debounce(this.lookup, 500)()
    },
    lookup () {
      if (!this.search.length) {
        this.list = []
        this.loading = false
        return
      }
      const search = this.search.toLowerCase()
      this.list = this.people.filter(person => {
        const name = person.nombre ? person.nombre.toLowerCase() : '@'
        const id = person.iden ? person.iden : '@'
        return name.includes(search) || id.toString().includes(search)
      })
      this.loading = false
    },
    showModal (recomendado) {
      this.modal.info = recomendado
      this.modal.show = true
    }
  },
  filters: {
    name (str) {
      if (!str) {
        return
      }
      const name = str.split(/\s/).map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase())
      return name.join(' ')
    }
  }
}
</script>

<style>
.banner {
  align-items: center;
  background-image: url(~/assets/images/banner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 'title' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  min-height: 50vh;
  padding: 20px 0;
}

.banner__title {
  grid-area: title;
}

.banner__title .title {
  color: #E35A2A;
}

.banner__content {
  color: #110066;
  grid-area: content;
  font-size: 20px;
}

.banner__icons {
  justify-content: space-between;
}

.banner__icons img {
  max-width: 35px;
}

.findings {
  padding: 40px 0 0;
}

.findings__tabs {
  padding: 20px 0;
}

.findings__description {
  display: grid;
  margin: 0 0 15px;
  grid-template-columns: 1fr;
}

.findings__content h3 {
  margin: 0 0 15px;
  color: #110066;
}

.findings__content p {
  margin: 0 0 15px;
}

.findings__content iframe {
  width: 100%;
  min-height: 400px;
}

.tabs-component {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tabs-component-tabs {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  background: #F6F9FE;
}

.tabs-component-tab {
  background: #F6F9FE;
  border-bottom: 5px solid transparent;
  padding: 10px;
  text-align: center;
  transition: border-bottom 0.15s;
}

.tabs-component-tab.is-active {
  border-bottom-color: #B1C2DE;
}

.tabs-component-tab-a {
  color: #110066;
  display: flex;
  flex-direction: column;
  font-family: 'Maven Pro Bold', sans-serif;
  text-decoration: none;
  font-size: 14px;
}

.suffix {
  font-family: 'Maven Pro Regular', sans-serif;
  font-size: 12px;
}

.tabs-component-panels {
  flex: 1 0 auto;
  padding: 20px 0;
}

.recommended {
  background: #F6F9FE;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: 'legend' 'photos';
  padding: 40px 20px;
  grid-gap: 20px;
}

.recommended__title {
  grid-area: legend;
}

.recommended__title h1 {
  margin: 0 0 20px;
}

.recommended__title p {
  color: #501981;
}

.recommended__photos {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-area: photos;
}

.recommended__photo {
  border-radius: 50%;
  max-width: 60px;
  display: flex;
  margin: 0 auto;
}

.recommended__item {
  color: #501981;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.search {
  background: #E7EEF8;
  padding: 40px 0;
}

.search__input {
  border-radius: 5px;
  border: none;
  display: block;
  font-family: 'Maven Pro Regular', sans-serif;
  font-size: 18px;
  margin: 20px auto;
  padding: 10px;
  width: 100%;
}

.results {
  margin: 20px 10px 20px 0;
  max-height: 700px;
  overflow: auto;
}

.results::-webkit-scrollbar {
  background-color: transparent;
  width: 5px;
}

.results::-webkit-scrollbar-thumb {
  background-color: #B1C2DE;
  border: 2px solid #B1C2DE;
}

.results::-webkit-scrollbar-track {
  background-color: #ffffff;
}

.results-enter-active, .results-leave-active {
  transition: opacity 0.25s ease-out;
}

.results-enter, .results-leave-to {
  opacity: 0;
}

.results-leave, .results-enter-to {
  opacity: 1;
}

.loader {
  margin: 20px 0;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-leave, .modal-enter-to {
  opacity: 1;
}

.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease-in-out;
}
@media screen and (min-width: 768px) {
  .banner {
    grid-template-columns: 0.7fr 1fr;
    grid-template-rows: none;
    grid-template-areas: 'title content';
    padding: 0;
  }
  .banner__icons {
    justify-content: flex-start;
  }
  .banner__icons img {
    margin: 0 10px;
  }
  .banner__icons img:nth-of-type(1) {
    margin-left: 0;
  }
  .suffix {
    font-size: 14px;
  }
  .tabs-component-tabs {
    flex-direction: row;
  }
  .tabs-component-tab-a {
    font-size: 20px;
  }
  .recommended {
    display: grid;
    grid-template-areas: 'legend photos';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  }
  .recommended__title {
    align-self: center;
  }
  .recommended__photo {
    border-radius: 50%;
    max-width: 100px;
  }
  .search__input {
    width: 80%;
  }
  .search span {
    margin: 10px;
  }
  .findings__description {
    align-items: center;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
