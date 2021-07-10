import { createWebHistory, createRouter } from "vue-router"
import IndexLayout from "../layout/indexLayout";
import AdminLayout from "../layout/AdminLayout";
import LoginForm from "../components/Forms/Login";
import IndexAdminPage from "../pages/IndexAdminPage";
import IndexEstaciones from "../pages/Estaciones/index";
import IndexUsuarios from "../pages/Usuarios/index";
import AgregarUsuario from "../pages/Usuarios/Agregar";
const routes = [
    {
        path: '/',
        component: IndexLayout,
        name: 'layoutIndex',
        children: [
            {
                path: '/',
                component: LoginForm,
                name: 'Login',
            }
        ],
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            {
                path: '/admin',
                component: IndexAdminPage,
                name: 'AdminIndex',
            },
            {
                path: '/admin/estaciones',
                component: IndexEstaciones,
                name: 'EstacionesIndex',
            },
            {
                path: '/admin/usuarios',
                component: IndexUsuarios,
                name: 'UsuariosIndex',
            },
            {
                path: '/admin/usuarios/agregar',
                component: AgregarUsuario,
                name: 'UsuariosAgregar',
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const isAuthenticated = () =>{
    if(window.localStorage.getItem('token') != null){
        return true;
    }
    return false;
};

router.beforeEach((to,from,next)=>{
    if(to.name !== 'Login' && !isAuthenticated) next ({name: 'Login'})
    else next();
})

export default router;
