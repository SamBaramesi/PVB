import { createApp } from 'vue'
import App from './App.vue'
import "./styles/style.css"
import * as VueRouter from 'vue-router'
import HomePage from './pages/HomePage.vue'
import CoursePage from './pages/CoursePage.vue'
import CourseOverviewPage from './pages/CourseOverviewPage.vue'
import AdminPage from './pages/AdminPage.vue'
import LoginPage from './pages/LoginPage.vue'
import EditCoursePage from './pages/EditCoursePage.vue'

createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(process.env.BASE_URL),
        routes: [
            {
                path: '/',
                alias: '/home',
                component: HomePage
            },
            {
                path: '/course/:courseId',
                component: CoursePage
            },
            {
                path: '/course-overview',
                component: CourseOverviewPage
            },
            {
                path: '/login',
                component: LoginPage
            },
            {
                path: '/admin-page',
                component: AdminPage
            },
            {
                path: '/edit-course/:_id',
                component: EditCoursePage
            }
        ]
    }))
    .mount('#app')
