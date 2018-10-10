import Vuex from 'vuex'
import search from '~/static/search.json'

const people = search.filter(register => register.tipo === 'Candidato')

const createStore = () => {
  return new Vuex.Store({ state: { people } })
}

export default createStore
