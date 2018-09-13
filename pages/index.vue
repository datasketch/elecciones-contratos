<template>
  <main class="item-fill">
    <div class="banner container">
      <div class="banner__title">
        <h1 class="title">Elecciones y contratos</h1>
        <div class="banner__icons line v-centered">
          <img src="~/assets/images/banner_icon_1.png">
          <img src="~/assets/images/banner_icon_2.png">
          <img src="~/assets/images/banner_icon_3.png">
          <img src="~/assets/images/banner_icon_4.png">
        </div>
      </div>
      <div class="banner__content">
        <p>Es una solución tecnológica que permite conocer datos acerca de quienes fueron candidatos al Congreso en 2018 y de los aportantes a sus campañas. Este prototipo busca aportar al control social facilitando la realización de cruces de información, entre datos oficiales de financiación de campañas electorales suministrados por Cuentas Claras, y datos de contratación pública oficiales suministrados por SECOP.</p>
      </div>
    </div>
    <div class="findings container">
      <h1 class="title">Hallazgos</h1>
      <div class="findings__content">
        <div class="findings__description">
          <p ref="aportes" class="finding">En las elecciones de Autoridades Locales de 2015 se realizaron donaciones por un total de $67,111,777,097 y en las de Congreso en 2018 de $54,729,419,333. Los candidatos que en estas elecciones obtuvieron una mayor cantidad de donaciones en su campaña fueron Enrique Peñalosa, elegido alcalde de Bogotá en 2015, en segundo lugar el electo Senador Álvaro Uribe en 2018, y el tercer lugar el electo alcalde de Cali en 2015 Maurice Armitage.</p>
          <p ref="gastos" class="finding no-visible">Los candidatos al Congreso 2018 gastaron en total $258,580,370,533 de los cuales el 51.4% fue gasto de candidatos a Cámara de Representantes y 48.6% corresponde a candidatos al Senado de la República. Los 3 candidatos que más invirtieron en su campaña fueron Armando Benedetti, Álvaro Uribe y Jorge Enrique Robledo.</p>
          <p ref="creditos" class="finding no-visible">Para las elecciones de Autoridades Locales en 2015, 1,155 candidatos accedieron a créditos, dando un total de $30,325,427,857 en dineros pedidos para estas campañas, la mayoría de créditos fueron pedidos por quienes se lanzaron al concejo. Por otro lado en las elecciones de Congreso en 2018, 512 candidatos accedieron a créditos, con un total de $35,140,923,052 para las campañas, la mayoría de créditos los hicieron quienes aspiraban a llegar a la cámara.</p>
          <p ref="contratos" class="finding no-visible">De los 73,127 candidatos de las elecciones de Autoridades Locales en 2015, once mil quinientos quince (15.7%) tienen contratos registrados con el Estado. En cuanto a los candidatos a las elecciones de Congreso 2018, de los 2,366, apróximadamente cuatrocientos ochenta y dos (20.4%) han tenido o tienen contratos con el Estado. Ambos datos según el histórico 2010-2018 de SECOP.</p>
        </div>
        <div class="findings__tabs">
          <tabs :options="{ useUrlFragment: false }" @changed="tabChanged">
            <tab id="aportes" name="Aportes" suffix="<span class='suffix'>Hallazgo 1</span>">1</tab>
            <tab id="gastos" name="Gastos" suffix="<span class='suffix'>Hallazgo 2</span>">2</tab>
            <tab id="creditos" name="Créditos" suffix="<span class='suffix'>Hallazgo 3</span>">3</tab>
            <tab id="contratos" name="Contratos" suffix="<span class='suffix'>Hallazgo 4</span>">4</tab>
          </tabs>
        </div>
      </div>
    </div>
    <div class="recommended container__inner">
      <div class="recommended__title">
        <h1 class="title">Recomendados</h1>
        <div class="legends">
          <div class="legend line v-centered">
            <div class="bullet bullet-blue"></div>
            <span>Candidato</span>
          </div>
          <div class="legend line v-centered">
            <div class="bullet bullet-orange"></div>
            <span>Financiador</span>
          </div>
        </div>
      </div>
      <div class="recommended__photos">
        <a href="#" class="candidate">
          <img class="recommended__photo" src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png">
        </a>
        <a href="#" class="candidate">
          <img class="recommended__photo" src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png">
        </a>
        <a href="#" class="candidate">
          <img class="recommended__photo" src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png">
        </a>
        <a href="#" class="financer">
          <img class="recommended__photo" src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png">
        </a>
        <a href="#" class="financer">
          <img class="recommended__photo" src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png">
        </a>
        <a href="#" class="financer">
          <img class="recommended__photo" src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png">
        </a>
      </div>
    </div>
    <div class="search container__inner">
      <h1 class="title line centered nowrap">
        <img src="~/assets/images/search.png" alt="Lupa" width="50">
        <span>Busca por nombre o cédula</span>
      </h1>
      <input type="text" @keyup="filter" class="search__input" v-model="search" placeholder="Escribe nombre o cédula del candidato">
    </div>
    <transition name="results">
      <div class="results">
        <result-card v-if="list.length" v-for="(person, index) in list" :key="index" :person="person"></result-card>
      </div>
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import ResultCard from '~/components/ResultCard'
import debounce from 'lodash.debounce'

export default {
  head () {
    return {
      title: 'Elecciones y contratos'
    }
  },
  components: { ResultCard },
  data () {
    return {
      findings: [],
      search: '',
      list: []
    }
  },
  computed: {
    ...mapState(['people'])
  },
  mounted () {
    this.findings = Array.from(document.querySelectorAll('.finding'))
  },
  methods: {
    tabChanged (selected) {
      const id = selected.tab.id
      const finding = this.$refs[id]
      this.findings.map(p => p.classList.add('no-visible'))
      finding.classList.remove('no-visible')
    },
    filter () {
      if (!this.search.length) {
        this.list = []
        return
      }

      debounce(this.lookup, 500)()
    },
    lookup () {
      const search = this.search.toLowerCase()
      this.list = this.people.filter(person => {
        const name = person.nombre ? person.nombre.toLowerCase() : '@'
        const id = person.iden ? person.iden : '@'
        return name.includes(search) || id.toString().includes(search)
      })
    }
  }
}
</script>

<style>
.banner {
  align-items: center;
  background-image: url(~/assets/images/banner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 'title' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  min-height: 50vh;
  padding: 20px 0;
}

.banner__title {
  grid-area: title;
}

.banner__content {
  color: #501981;
  grid-area: content;
}

.banner__icons {
  justify-content: space-between;
}

.banner__icons img {
  max-width: 35px;
}

.findings {
  padding: 40px 0;
}

.findings__content {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: 'description' 'tabs';
  padding: 20px 0 0;
}

.findings__description {
  grid-area: description;
}

.findings__tabs {
  grid-area: tabs;
}

.finding {
  align-self: center;
  color: #6989C2;
}

.finding.no-visible {
  display: none;
}

.tabs-component {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tabs-component-tabs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
}

.tabs-component-tab {
  background: #F6F9FE;
  border-bottom: 5px solid transparent;
  padding: 5px 15px;
  text-align: center;
  transition: border-bottom 0.15s;
}

.tabs-component-tab.is-active {
  border-bottom-color: #B1C2DE;
}

.tabs-component-tab-a {
  color: #110066;
  display: flex;
  flex-direction: column;
  font-family: 'Maven Pro Bold', sans-serif;
  text-decoration: none;
  font-size: 14px;
}

.suffix {
  font-family: 'Maven Pro Regular', sans-serif;
  font-size: 12px;
}

.tabs-component-panels {
  flex: 1 0 auto;
  padding: 20px 0;
}

.legend {
  margin: 0 0 5px;
}

.bullet {
  border-radius: 50%;
  height: 15px;
  margin-right: 5px;
  width: 15px;
}

.bullet-blue {
  background: #97E3FD;
}

.bullet-orange {
  background: #E35A2A;
}

.recommended {
  background: #F6F9FE;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: 'legend' 'photos';
  padding: 40px 20px;
  grid-gap: 20px;
}

.recommended__title {
  grid-area: legend;
}

.recommended__title h1 {
  margin: 0 0 20px;
}

.recommended__photos {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-area: photos;
}

.recommended__photo {
  border-radius: 50%;
  max-width: 60px;
}

.recommended__photos a {
  border-radius: 50%;
  border: 5px solid transparent;
}

.candidate {
  border-color: #97E3FD !important;
}

.financer {
  border-color: #E35A2A !important;
}

.search {
  background: #E7EEF8;
  padding: 40px 0;
}

.search__input {
  border-radius: 5px;
  border: none;
  display: block;
  font-family: 'Maven Pro Regular', sans-serif;
  font-size: 18px;
  margin: 20px auto;
  padding: 10px;
  width: 100%;
}

.results {
  margin: 20px 0;
  max-height: 700px;
  overflow: auto;
}

.results-enter-active, .results-leave-active {
  transition: opacity 0.25s ease-out;
}

.results-enter, .results-leave-to {
  opacity: 0;
}

.results-leave, .results-enter-to {
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .banner {
    grid-template-columns: 0.7fr 1fr;
    grid-template-rows: none;
    grid-template-areas: 'title content';
    padding: 0;
  }
  .banner__icons {
    justify-content: flex-start;
  }
  .banner__icons img {
    margin: 0 10px;
  }
  .banner__icons img:nth-of-type(1) {
    margin-left: 0;
  }
  .findings__content {
    grid-template-columns: 0.7fr 1fr;
    grid-template-rows: none;
    grid-template-areas: 'description tabs';
    grid-gap: 40px;
  }
  .suffix {
    font-size: 14px;
  }
  .tabs-component-tabs {
    flex-direction: row;
  }
  .tabs-component-tab-a {
    font-size: 16px;
  }
  .recommended {
    display: grid;
    grid-template-areas: 'legend photos';
    grid-template-columns: repeat(2, auto);
    grid-template-rows: none;
  }
  .recommended__title {
    align-self: center;
  }
  .recommended__photo {
    border-radius: 50%;
    max-width: 100px;
  }
  .search__input {
    width: 80%;
  }
  .search span {
    margin: 10px;
  }
}
</style>
