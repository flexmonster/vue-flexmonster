import Vue from 'vue'
import Pivot from './Pivot.vue';

//Allows user to set a custom component name
function install(Vue, options = {}){
   Vue.component(options.PivotName || 'Pivot', Pivot)
}

//Allows user to use Pivot as a plugin
export default install

//Auto-Install when included directly in the browser:
if(typeof window != undefined && window.Vue && window.Vue == Vue){
 install(window.Vue)
}

//Allows user to register Pivot locally, without global registration
export {
  Pivot
}
