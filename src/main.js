import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Pokemon from './components/Pokemon.vue'
import PokeDetails from './components/PokeDetails.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/pokeDetails/:id', component:PokeDetails},
  {path: '/', component:Pokemon}
];

const router  = new VueRouter({
  routes,
  mode:'history'
});


new Vue({
  el:'#app',
  router,
  render: h => h(App)
});
