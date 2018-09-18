<template>
  <main class="item-fill">
    <div class="brief container">
      <p>En esta sección podrá descargar las bases de datos de su interés relacionadas con financiación de campañas electorales y contratación pública. </p>
    </div>
    <div class="container">
      <div v-for="(dato, index) in datos" :key="index" class="column dato">
        <p class="dato__title">{{dato.title}}</p>
        <p class="dato__summary">{{dato.description}}</p>
        <a :href="dato.link" class="button item-start">Descargar</a>
      </div>
    </div>
  </main>
</template>

<script>
import datos from '~/static/datos.json'

export default {
  name: 'Datos',
  head () {
    return {
      title: 'Datos | Elecciones y contratos'
    }
  },
  data () {
    return {
      datos
    }
  }
}
</script>

<style scoped>
.dato__title {
  font-size: large;
  margin: 0 0 15px;
  font-family: 'Nixie One Regular', cursive;
  font-weight: bold;
}

.dato__summary {
  margin: 0 0 15px;
}

.dato {
  padding: 0 0 10px;
  margin: 0 0 10px;
  border-bottom: 2px solid #e4e4e4;
}

.dato:nth-last-child(1) {
  border: none;
}
</style>
