<template>
    <div class="container-fluid mt-2">
        <main class="p-2 bg-light bg-gradient border-2 rounded-2 p-2" style="height: 90vh !important; overflow-x: hidden !important">
            <router-view></router-view>
        </main>
        <div class="w-100 text-center border-2 bg-secondary bg-gradient rounded-2 mt-2" style="height: 50px">
            <ul class="nav col-12 col-md-auto justify-content-center mx-auto list-inline p-1">
                <router-link
                    :to="{name: 'AdminIndex'}"
                    class="nav-link px-2 link-light"
                >
                    <li class="link-light list-inline-center text-center">
                        Home
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
        </div>
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
body {
    overflow: hidden; /* Hide scrollbars */
}
</style>
