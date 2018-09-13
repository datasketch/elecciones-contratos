<template>
  <footer>
    <div class="container">
      <div class="logos">
        <div class="media">
          <img src="~/assets/images/gobierno_mintic.png" alt="Gobierno, MinTic">
        </div>
        <div class="media">
          <img src="~/assets/images/centro_de_innnovacion.png" alt="Centro de Innovación">
        </div>
      </div>
      <p>Acciónate fue desarrollada a partir de un proceso de construcción colectiva innovador desarrollado por Transparencia por Colombia, la Corporación Somos Más, Datasketch, y el Centro de Innovación Pública Digital de MinTIC.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background: #E7EEF8;
  padding: 10px;
}

footer p {
  margin: 15px 0 0;
}

.logos {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}

.media {
  margin: 5px;
  min-width: 0;
}

.media img {
  max-width: 100%;
}

.media:nth-of-type(1) img {
  width: 300px;
}

.media:nth-of-type(2) img {
  width: 100px;
}
</style>
