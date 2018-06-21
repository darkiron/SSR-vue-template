import Vue from 'vue'
import Router from 'vue-router'

import Home from './Components/Home.vue'
import Greet from './Components/Greet.vue'
import Article from './Components/Article.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
    	// { path: '/', name: 'home', component: () => require('./components/Home.vue') },
    	{ path: '/', name: 'home', component: Home },
    	// { path: '/:name', name: 'greet', component: () => require('./components/Greet.vue') },
    	{ path: '/:name', name: 'greet', component: Greet },
    	{ path: '/blog/:slug', name: 'article', component: Article },
    ]
  })
}