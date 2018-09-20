<template>
  <footer>
    <div class="container">
      <div class="logos">
        <div class="media">
          <img src="~/assets/images/sm.png" alt="Gobierno, MinTic">
        </div>
        <div class="media">
          <img src="~/assets/images/dt.png" alt="Gobierno, MinTic">
        </div>
        <div class="media">
          <img src="~/assets/images/txc.png" alt="Centro de Innovación">
        </div>
        <div class="media">
          <img src="~/assets/images/cipd.png" alt="Centro de Innovación">
        </div>
        <div class="media">
          <img src="~/assets/images/gc.png" alt="Centro de Innovación">
        </div>
        <div class="media">
          <img src="~/assets/images/mintic.png" alt="Centro de Innovación">
        </div>
        <div class="media">
          <img src="~/assets/images/pnud.png" alt="Centro de Innovación">
        </div>
        <div class="media">
          <img src="~/assets/images/ud.png" alt="Centro de Innovación">
        </div>
      </div>
      <p>Elecciones y contratos fue desarrollada a partir de un proceso de construcción colectiva innovador desarrollador por Transparencia por Colombia, la Corporación Somos Más, Datasketch y el Centro de Innovación Pública Digital de MinTIC</p>
      <p>Esta plataforma fue construida con datos de financiación de campañas electorales de Cuentas Claras y datos de contratación pública de SECOP</p>
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
  font-size: small;
}

footer p {
  color: #110066;
  margin: 0 0 5px;
}

.logos {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 15px;
  justify-content: space-between;
}

.media {
  margin: 5px;
  min-width: 0;
  max-width: 100px;
}

.media img {
  max-width: 100%;
}

.media:nth-last-child(1),
.media:nth-last-child(2) {
  max-width: 70px;
}
</style>
