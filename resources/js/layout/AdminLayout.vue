<template>
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <router-link
                    :to="{name: 'AdminIndex'}"
                    exact
                >
                    <li>
                        Home
                    </li>
                </router-link>
                <router-link
                    :to="{name: 'EstacionesIndex'}"
                    class="nav-link px-2 link-dark"
                    exact
                >
                    <li>
                        Estaciones
                    </li>
                </router-link>
                <router-link
                    :to="{name: 'UsuariosIndex'}"
                    class="nav-link px-2 link-dark"
                    exact
                >
                    <li>
                        Usuarios
                    </li>
                </router-link>
            </ul>

            <div class="col-md-3 text-end">
                <button @click="cerrarSesion" type="button" class="btn btn-outline-danger">Cerrar sesión</button>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import {ref} from "vue";
import router from "../routes";
export default {
    components:{
    },
    name: "AdminLayout",
    setup(){
        let usuario = ref(JSON.parse(window.localStorage.getItem('usuario')));

        const changePage = (nombre) => {
            router.push({name: nombre})
        }

        const cerrarSesion = ()=>{
            window.localStorage.removeItem('usuario');
            window.localStorage.removeItem('access_token');
            router.push({name: 'Login'});
        }
        return {
            usuario,
            changePage,
            cerrarSesion
        }
    }
}
</script>

<style>
.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.text-small {
    font-size: 85%;
}

.dropdown-toggle {
    outline: 0;
}
.exact-active{
 color: darkgreen !important;
}
</style>
