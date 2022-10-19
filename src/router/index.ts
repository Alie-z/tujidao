import {
    createRouter as createVueRouter,
    createMemoryHistory,
    createWebHistory,
    Router
} from 'vue-router';

export const createRouter = (type: 'client' | 'server'): Router =>
    createVueRouter({
        history: type === 'client' ? createWebHistory() : createMemoryHistory(),

        routes: [
            {
                path: '/',
                name: 'home',
                meta: {
                    title: '首页',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/index.vue')
            },
            {
                path: '/search-content',
                name: 'searchContent',
                meta: {
                    title: '搜索结果',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/searchContent.vue')
            },
            {
                path: '/index',
                name: 'demo-index',
                meta: {
                    title: 'demo',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/demo/index.vue')
            },
            {
                path: '/login',
                name: 'login',
                meta: {
                    title: '登录',
                    keepAlive: true,
                    requireAuth: false
                },
                component: () => import('@/pages/demo/login.vue')
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '用户中心',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/demo/user.vue')
            },
            {
                path: '/vueuse',
                name: 'vueuse',
                meta: {
                    title: 'vueuse',
                    keepAlive: true,
                    requireAuth: true
                },
                component: () => import('@/pages/demo/vueUse.vue')
            }
        ]
    });
