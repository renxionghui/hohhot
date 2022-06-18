import { createRouter, createWebHashHistory } from "vue-router"
import { isLogin } from "./state"

const history = createWebHashHistory()

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import("./components/Main.vue"),
        redirect:{name:"map-manage"},
        children:[
            {
                path:"map-manage",
                name:"map-manage",
                component: () => import("./components/map/MapManage.vue"),
            },
            {
                path:"vegetation-query",
                name:"vegetation-query",
                component: () => import("./components/vegetation/VegetationQuery.vue"),
            },
            {
                path:"vegetation-edit",
                name:"vegetation-edit",
                component: () => import("./components/vegetation/VegetationEdit.vue"),
            },
            {
                path:"vegetation-update",
                name:"vegetation-update",
                component: () => import("./components/vegetation/VegetationUpdate.vue"),
            },
            {
                path:"drawing-manage",
                name:"drawing-manage",
                component: () => import("./components/drawing/DrawingManage.vue"),
            },
            {
                path:"planning-manage",
                name:"planning-manage",
                component: () => import("./components/planning/PlanningManage.vue"),
            },
            {
                path:"evaluate-manage",
                name:"evaluate-manage",
                component: () => import("./components/evaluate/EvaluateManage.vue"),
            },
            {
                path:"ecology-manage",
                name:"ecology-manage",
                component: () => import("./components/ecology/EcologylManage.vue"),
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('./components/login/Login.vue')
    }
]

const router = createRouter({ history, routes })

router.beforeEach((to) => {
    if (!isLogin.value && to.name !== 'login') return { name: 'login' }
    return true
})

export default router

