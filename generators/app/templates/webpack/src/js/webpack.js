import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./pages/Home.vue"
import Page from "./pages/Page.vue"

Vue.use(VueRouter);


const routeList=[
	{path: 	'/'	,	component: 	Home},
	{path: 	'/page'	,	component: 	Page}
];

const router = new VueRouter({
  routes:routeList
});

window.app = new Vue({
	el: '#app',
	router
});