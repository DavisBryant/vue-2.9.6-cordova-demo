// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/**
 * import vue-cordova plugin
 * */
import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})
/**
 * add cordova.js only if serving the app through file://
 * */
if (window.location.protocol === 'file:' || window.location.port === '3000' || window.location.port === '3001') {
  const cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
var cordova  = Vue.cordova

/**
 * Import necessary JS files and CSS files
 * @ css file: reset.css  |   Basic style file
 * */
import 'assets/css/reset.css'


/**
 *  import UI plugin
 * */
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

document.addEventListener('deviceready', () => {
  console.log( Vue.cordova )
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    data: function () {
      return {
        cordova: Vue.cordova
      }
    }
  })
  if (cordova.platformId == 'android') {
    StatusBar.backgroundColorByHexString("#fff");
    StatusBar.styleDefault();
  }
}, false)

