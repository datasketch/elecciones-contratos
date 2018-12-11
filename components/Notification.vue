<template>
  <div class="notification">
    <div class="notification__inner">
      <p>Este es un sitio en construcción. Pueden existir inconsistencias en algunos datos. Si usas esta información, asegúrese de contrastarla con las fuentes originales.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification'
}
</script>

<style>
.notification {
  background: #110066;
  color: white;
  font-size: small;
  text-align: center;
}

.notification__inner {
  padding: 10px 5%;
}
</style>
