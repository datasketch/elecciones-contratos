<template>
  <main class="item-fill">
    <div class="brief container">
      <p>En esta sección podrá conocer el perfil del candidato, conocerá quiénes financiaron su campaña, en qué departamento se encuentran los financiadores, y el monto aportado por cada uno. Podrá además acceder al perfil de los financiadores y conocer los contratos públicos en los que ha participado.</p>
    </div>
    <div class="container">
      <iframe :src="url" frameborder="0"></iframe>
    </div>
  </main>
</template>

<script>
import { iframeResizer } from 'iframe-resizer'

export default {
  name: 'Candidatos',
  data () {
    return {
      url: 'https://randommonkey.shinyapps.io/elecciones-contratos-networks/',
      query: ''
    }
  },
  created () {
    const query = this.$route.query
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
  }
}
</script>

<style scoped>
iframe {
  width: 100%;
  min-height: 600px;
}
</style>
