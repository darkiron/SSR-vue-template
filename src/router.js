import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
    	{ path: '/', name: 'home', component: () => require('./components/Home.vue') },
    	{ path: '/:name', name: 'greet', component: () => require('./components/Greet.vue') },
    ]
  })
}