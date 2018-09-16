<template>
  <main class="item-fill column container">
    <p>Elecciones y contratos fue desarrollada a partir de un proceso de construcción colectiva innovador desarrollado por Transparencia por Colombia, la Corporación Somos Más, DataSketch, y el Centro de Innovación Pública Digital de MinTIC.</p>
    <div class="organization">
      <h2 class="organization__name">Centro de Innovación Pública Digital de MinTIC</h2>
      <p class="organization__role">Facilitador del proceso</p>
      <p>El Centro de Innovación es un proyecto desarrollado bajo el liderazgo de la Dirección de Gobierno en Línea del Ministerio TIC, que tiene como objetivo fortalecer la capacidad de innovación en las entidades públicas mediante el uso de las tecnologías de la información y la comunicación.</p>
    </div>
    <div class="organization">
      <h2 class="organization__name">Corporación Somos Más</h2>
      <p class="organization__role">Multiplicador</p>
      <p>Organización de sociedad civil con 15 años de experiencia en el diseño e implementación de procesos innovadores de construcción colectiva.</p>
    </div>
    <div class="organization">
      <h2 class="organization__name">Datasketch</h2>
      <p class="organization__role">Mecanismo de fortalecimiento en tecnología</p>
      <p>Organización que permite a periodistas, científicos de datos, científicos sociales y a la ciudadanía en general, aprender y consultar sobre visualizaciones de datos, herramientas, software, e investigaciones profundas sobre diversos temas coyunturales.</p>
    </div>
    <div class="organization">
      <h2 class="organization__name">Transparencia por Colombia</h2>
      <p class="organization__role">Organización que propone el reto</p>
      <p>Capítulo Nacional de Transparencia Internacional -TI-, la Organización No Gubernamental líder en el mundo en la lucha contra la corrupción que trabaja en más de 100 países.</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Nosotros'
}
</script>

<style scoped>
main {
  padding: 20px 0;
}

.organization {
  border-bottom: 2px solid #B1C2DE;
  padding: 20px 0;
}

.organization:nth-last-child(1) {
  border-bottom-color: transparent;
}

.organization__name {
  color: #501981;
  font-family: 'Nixie One Regular', cursive;
  font-size: 20px;
  margin: 0 0 10px;
}

.organization__role {
  margin: 0 0 10px;
  font-size: small;
}
</style>
