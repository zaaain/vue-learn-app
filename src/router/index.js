import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from "@/components/IncDec.vue"
import Home from "@/components/Test.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/counter',
        name: 'Counter',
        component: Counter
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;