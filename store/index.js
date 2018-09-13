import Vuex from 'vuex'
import search from '~/static/search.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      people: search
    }
  })
}

export default createStore
