<template>
  <main class="item-fill container">
    <iframe src="https://randommonkey.shinyapps.io/elecciones-contratos-cruces/" frameborder="0"></iframe>
  </main>
</template>

<script>
import { iframeResizer } from 'iframe-resizer'

export default {
  name: 'Explora',
  mounted () {
    const iframe = document.querySelector('iframe')
    iframeResizer({ checkOrigin: false }, iframe)
  },
  head () {
    return {
      title: 'Contratos | Elecciones y contratos'
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
