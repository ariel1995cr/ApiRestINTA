<template>
    <div class="container" style="padding-bottom:50px;">
        <header style="height: 60px" class="mt-2 border-2 rounded-2 border-bottom bg-secondary bg-gradient ml-2 w-100 fixed-bottom p-2">
            <ul class="nav col-12 col-md-auto justify-content-center mx-auto list-inline">
                <router-link
                    :to="{name: 'AdminIndex'}"
                    class="nav-link px-2 link-light"
                >
                    <li class="link-light list-inline-center text-center">
                        Home
                    </li>
                </router-link>
                <router-link
                    :to="{name: 'EstacionesIndex'}"
                    class="nav-link px-2 link-light"
                    exact
                >
                    <li>
                        Estaciones
                    </li>
                </router-link>
                <router-link
                    :to="{name: 'UsuariosIndex'}"
                    class="nav-link px-2 link-light"
                    exact
                >
                    <li>
                        Usuarios
                    </li>
                </router-link>
                <li
                    class="mt-1 link-light"
                >
                    <button @click="cerrarSesion" type="button" class="btn btn-sm btn-danger">Cerrar sesión</button>
                </li>
            </ul>
        </header>
        <main class="p-2">
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
 color: lawngreen !important;
}
</style>
