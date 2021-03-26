import Welcome from './components/WelcomeComponent.vue'
import Create from './components/CreateComponent.vue'
import Edit from './components/EditComponent.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

export default {
    mode: 'history',
    // base: '/localhost:8000',
    fallback: true,
    routes: [
        {
            path: '/',
            component: Welcome,
            name: 'Welcome'
        },
        {
            path: '/create',
            component: Create,
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: Edit,
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
        },
        {
            name: 'Register',
            path: '/register',
            component: Register,
        }
    ]
}
