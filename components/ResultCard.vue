<template>
  <div class="card">
    <p>
      <span class="type">{{ person.tipo | capitalize }}: </span>
      <span class="name">{{ person.nombre | name }}</span>
    </p>
    <p class="line justify-between v-centered">
      <span class="charge">Aspiró a: {{ person.cargo }}</span>
      <a href="" class="column centered">Ver más</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Result Card',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  filters: {
    capitalize (str) {
      if (!str) {
        return
      }
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
    },
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

<style scoped>
.card {
  padding: 0 7%;
}

.type {
  color: #97E3FA;
}

.name {
  color: #110066;
}

.card p:nth-of-type(1) {
  font-size: 18px;
  margin: 0 0 5px;
}

.card p:nth-of-type(2) {
  border-bottom: 2px solid #ececec;
  margin: 0 0 5px;
  padding: 0 0 5px;
  color: #B1C2DE;
}

a {
  background: #B1C2DE;
  color: #110066;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  font-size: small;
}
</style>
