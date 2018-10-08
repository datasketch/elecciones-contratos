<template>
  <div class="sidebar column v-centered">
    <div class="sidebar__inner column">
      <nuxt-link class="nav__link" to="/">Inicio</nuxt-link>
      <nuxt-link class="nav__link" to="/elecciones">Elecciones</nuxt-link>
      <nuxt-link class="nav__link" to="/contratos">Contratos</nuxt-link>
      <nuxt-link class="nav__link" to="/datos">Datos</nuxt-link>
      <nuxt-link class="nav__link" to="/nosotros">Nosotros</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  display: block;
  overflow-y: auto;
  width: 0;
  height: 0;
}

.sidebar .nav__link {
  border-bottom: 5px solid transparent;
  color: #501981;
  font-family: 'Maven Pro Regular', sans-serif;
  padding: 0 0 5px;
  text-decoration: none;
}

.sidebar.open {
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100%;
  left: 0;
  min-width: 200px;
  position: fixed;
  top: 0;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 10;
}

.sidebar__inner {
  padding: 10px 10px 10px 20px;
}

@media screen and (min-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
