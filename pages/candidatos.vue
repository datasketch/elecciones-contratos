<template>
  <main class="item-fill">
    <div class="brief container">
      <p>En esta sección podrá conocer el perfil del candidato, conocerá quiénes financiaron su campaña, en qué departamento se encuentran los financiadores, y el monto aportado por cada uno. Podrá además acceder al perfil de los financiadores y conocer los contratos públicos en los que ha participado.</p>
    </div>
    <iframe src="https://randommonkey.shinyapps.io/buscador" frameborder="0"></iframe>
  </main>
</template>

<script>
import { iframeResizer } from 'iframe-resizer'

export default {
  name: 'Candidatos',
  mounted () {
    const iframe = document.querySelector('iframe')
    iframeResizer({ checkOrigin: false }, iframe)
  }
}
</script>

<style scoped>
iframe {
  width: 100%;
  min-height: 600px;
}
</style>
