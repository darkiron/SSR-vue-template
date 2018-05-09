import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Greet from './components/Greet.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
    	// { path: '/', name: 'home', component: () => require('./components/Home.vue') },
    	{ path: '/', name: 'home', component: Home },
    	// { path: '/:name', name: 'greet', component: () => require('./components/Greet.vue') },
    	{ path: '/:name', name: 'greet', component: Greet },
    ]
  })
}