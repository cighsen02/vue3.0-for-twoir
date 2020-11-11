import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'


// "history":createWebHistory()
// "hash":createWebHashHistory()
// "abstract":createMemoryHistory()
const router = createRouter({
	history: createWebHashHistory(),
	routes: [{
			path: '/',
			component: () => import( '../views/Home.vue')
		},
		{
			path: '/contact',
			component: () => import( '../views/Contact.vue')
		},
		{
			path: '/music',
			component: () => import( '../views/Music.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'Notfound',
			component: () => import( '../views/Notfound.vue')
		}
	]
})

export default router