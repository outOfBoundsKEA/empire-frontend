import movies from './pages/index'

const routes = [
    {
        path: '/',
        redirect: { name: 'Movies' }
    },
    {
        path: '/movies',
        name: 'Movies',
        component: movies
    }
]

export default routes
