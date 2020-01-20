import Vue from 'vue'

import JContainer from '@/components/global/j-container'
import JRow from '@/components/global/j-row'
import JCol from '@/components/global/j-col'

import JInput from '@/components/global/form-controls/j-input'
import JSelect from '@/components/global/form-controls/j-select'
import JSlider from '@/components/global/form-controls/j-slider'
import JCheckbox from '@/components/global/form-controls/j-checkbox'


Vue.component('j-container', JContainer)
Vue.component('j-row', JRow)
Vue.component('j-col', JCol)

Vue.component('j-input', JInput)
Vue.component('j-select', JSelect)
Vue.component('j-slider', JSlider)
Vue.component('j-checkbox', JCheckbox)

Vue.directive('blur', {
  bind(el, binding) {
    // binding.arg is the eventname on which the element should blur
    if (binding.value) {
      el[binding.arg] = function() {
        this.blur()
      }
    }
  },
  unbind(el, binding) {
    if (binding.value) {
      el[binding.arg] = null
    }
  }
})