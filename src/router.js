import { createRouter, createWebHashHistory } from "vue-router"
import { isLogin } from "./state"

const history = createWebHashHistory()

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import("./components/Main.vue"),
        redirect: { name: "vegetation-manage" },
        children: [
            {
                path: "vegetation-manage",
                name: "vegetation-manage",
                component: () => import("./components/vegetation/VegetationManage.vue"),
                redirect: { name: "query" },
                children: [
                    {
                        path: "query",
                        name: "query",
                        component: () => import("./components/vegetation/VegetationQuery.vue"),
                    },
                    {
                        path: "edit",
                        name: "edit",
                        component: () => import("./components/vegetation/VegetationEdit.vue")
                    },
                    {
                        path: "add",
                        name: "add",
                        component: () => import("./components/vegetation/VegetationAdd.vue")
                    },
                ]
            },
            {
                path: "drawing-manage",
                name: "drawing-manage",
                component: () => import("./components/drawing/DrawingManage.vue"),
            },
            {
                path: "planning-manage",
                name: "planning-manage",
                component: () => import("./components/planning/PlanningManage.vue"),
            },
            {
                path: "evaluate-manage",
                name: "evaluate-manage",
                component: () => import("./components/evaluate/EvaluateManage.vue"),
            },
            {
                path: "ecology-manage",
                name: "ecology-manage",
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

