import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Game from '@/components/Game.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/game',
        name: 'game',
        component: Game,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
