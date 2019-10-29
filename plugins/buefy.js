import Vue from 'vue'
import Buefy from 'buefy'
import '@mdi/font/scss/materialdesignicons.scss'

import JRow from '@/components/global/j-row'
import JCol from '@/components/global/j-col'
import JBlurbLink from '@/components/global/j-blurb-link'

Vue.use(Buefy)

Vue.component('j-row', JRow)
Vue.component('j-col', JCol)
Vue.component('j-blurb-link', JBlurbLink)