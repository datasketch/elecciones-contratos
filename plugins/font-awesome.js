import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faGlobe, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF, faTwitter, faBuilding, faGlobe, faEnvelope, faPhone)

Vue.component('font-awesome-icon', FontAwesomeIcon)
