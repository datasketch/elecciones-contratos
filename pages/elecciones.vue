<template>
  <main class="item-fill">
    <div class="brief container">
      <p>En esta sección podrá conocer el perfil del candidato, conocerá quiénes financiaron su campaña, en qué departamento se encuentran los financiadores, y el monto aportado por cada uno. Podrá además acceder al perfil de los financiadores y conocer los contratos públicos en los que ha participado.</p>
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
        <result-card  :external="false" :onclick="changeSrc" v-for="(person, index) in list" :key="index" :person="person"></result-card>
      </div>
    </transition>
    <!-- Search -->
    <div class="container">
      <iframe :src="url" frameborder="0"></iframe>
    </div>
  </main>
</template>

<script>
import { iframeResizer } from 'iframe-resizer'
import { mapState } from 'vuex'
import Loader from '~/components/Loader'
import ResultCard from '~/components/ResultCard'
import debounce from 'lodash.debounce'

export default {
  name: 'Candidatos',
  components: { Loader, ResultCard },
  computed: {
    ...mapState(['people'])
  },
  data () {
    return {
      baseUrl: 'https://randommonkey.shinyapps.io/elecciones-contratos-networks/',
      url: '',
      query: '',
      findings: [],
      search: '',
      list: [],
      loading: false
    }
  },
  created () {
    const query = this.$route.query
    this.url = this.baseUrl
    this.query = query.node_id
    if (this.query) {
      this.url = this.url + `?node_id=${this.query}`
    }
  },
  mounted () {
    const iframe = document.querySelector('iframe')
    iframeResizer({ checkOrigin: false }, iframe)
  },
  head () {
    return {
      title: 'Elecciones | Elecciones y contratos'
    }
  },
  methods: {
    changeSrc (iden) {
      this.list = []
      this.url = this.baseUrl + `?node_id=${iden}`
    },
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
  }
}
</script>

<style scoped>
iframe {
  width: 100%;
  min-height: 600px;
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

@media screen and (min-width: 768px) {
  .search span {
    margin: 10px;
  }
}
</style>
