const Home = () => import('../views/Home');
const NotFound = () => import('../views/NotFound');

export default [
    {
        path: '', 
        component: Home,
        name: 'home',
    },
    {
        path: '*',
        name: 'fallback',
        component: NotFound,
    }
];
